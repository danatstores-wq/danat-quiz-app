import fs from "node:fs";
import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const BATCH_SIZE = 400;

function parseServiceAccount(rawCredentials) {
  let candidate = rawCredentials.replace(/^\uFEFF/, "").trim();

  // Remove common Markdown fences if the entire secret was copied from a code block.
  candidate = candidate.replace(/^\x60{3}(?:json)?\s*/i, "").replace(/\s*\x60{3}$/i, "").trim();

  // Accept a raw JSON object, a JSON-encoded string, or raw JSON accidentally
  // surrounded by one extra pair of quote characters.
  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      const parsed = JSON.parse(candidate);
      if (typeof parsed === "string") {
        candidate = parsed.trim();
        continue;
      }
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) return parsed;
      throw new Error("The parsed value is not a JSON object.");
    } catch (error) {
      // Handle an extra pair of literal quotes around a multiline JSON object.
      if (candidate.length >= 2 && candidate[0] === '"' && candidate[candidate.length - 1] === '"') {
        candidate = candidate.slice(1, -1).trim();
        continue;
      }
      const detail = error instanceof SyntaxError ? error.message : error.message;
      throw new Error(
        `FIREBASE_SERVICE_ACCOUNT_JSON could not be parsed (${detail}). The secret must contain the complete service-account JSON object, without surrounding quote marks or Markdown fences.`
      );
    }
  }

  throw new Error("FIREBASE_SERVICE_ACCOUNT_JSON has too many nested encoding layers. Store the raw JSON file contents as the GitHub secret.");
}

function loadAdminApp() {
  const rawCredentials = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  if (!rawCredentials) throw new Error("Missing FIREBASE_SERVICE_ACCOUNT_JSON GitHub Actions secret.");

  const serviceAccount = parseServiceAccount(rawCredentials);
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
