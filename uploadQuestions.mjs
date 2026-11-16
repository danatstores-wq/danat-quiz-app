import fs from "node:fs";
import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const BATCH_SIZE = 400;

function loadAdminApp() {
  const rawCredentials = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  if (!rawCredentials) throw new Error("Missing FIREBASE_SERVICE_ACCOUNT_JSON GitHub Actions secret.");

  let serviceAccount;
  try {
    // Trim surrounding whitespace and tolerate a UTF-8 BOM from downloaded JSON files.
    const normalizedCredentials = rawCredentials.replace(/^\\uFEFF/, "").trim();
    serviceAccount = JSON.parse(normalizedCredentials);
  } catch {
    throw new Error("FIREBASE_SERVICE_ACCOUNT_JSON is not valid JSON. Paste the complete contents of the downloaded service-account .json file into the GitHub secret, without code fences or extra quotation marks.");
  }

  if (!serviceAccount.project_id || !serviceAccount.client_email || !serviceAccount.private_key) {
    throw new Error("The service-account JSON is missing project_id, client_email, or private_key.");
  }

  return getApps().length
    ? getApps()[0]
    : initializeApp({ credential: cert(serviceAccount), projectId: serviceAccount.project_id });
}

async function uploadQuestions() {
  const questions = JSON.parse(fs.readFileSync("./questions.json", "utf8"));
  if (!Array.isArray(questions)) throw new Error("questions.json must contain an array.");

  const seenIds = new Set();
  for (const question of questions) {
    if (!question || typeof question.id !== "string" || !question.id.trim()) {
      throw new Error("Every question must have a non-empty string id.");
    }
    if (seenIds.has(question.id)) throw new Error(`Duplicate question ID in questions.json: ${question.id}`);
    seenIds.add(question.id);
  }

  const db = getFirestore(loadAdminApp());
  console.log(`Checking existing Firestore question IDs for ${questions.length} local questions...`);
  const existingSnapshot = await db.collection("questions").select().get();
  const existingIds = new Set(existingSnapshot.docs.map((item) => item.id));
  const newQuestions = questions.filter((question) => !existingIds.has(question.id));

  console.log(`Found ${existingIds.size} existing question documents.`);
  if (newQuestions.length === 0) {
    console.log("No new questions to add. Existing Firestore questions were left unchanged.");
    return;
  }

  console.log(`Appending ${newQuestions.length} new questions; skipping ${questions.length - newQuestions.length} existing IDs.`);
  let created = 0;

  for (let start = 0; start < newQuestions.length; start += BATCH_SIZE) {
    const chunk = newQuestions.slice(start, start + BATCH_SIZE);
    const batch = db.batch();
    for (const question of chunk) {
      // create() rejects an existing ID, so this uploader cannot overwrite old documents.
      batch.create(db.collection("questions").doc(question.id), question);
    }
    await batch.commit();
    created += chunk.length;
    console.log(`Created ${created} of ${newQuestions.length} new questions.`);
  }

  console.log("Append-only upload complete. Existing question documents were not modified.");
}

uploadQuestions().catch((error) => {
  console.error("Question upload failed:", error);
  process.exitCode = 1;
});
