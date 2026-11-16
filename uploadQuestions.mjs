import fs from "node:fs";
import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const BATCH_SIZE = 400;

function parseServiceAccount(rawCredentials) {
  let candidate = rawCredentials.replace(/^\uFEFF/, "").trim();
  candidate = candidate.replace(/^\x60{3}(?:json)?\s*/i, "").replace(/\s*\x60{3}$/i, "").trim();

  // If explanatory text or a label was pasted around the key, isolate the JSON object.
  const firstBrace = candidate.indexOf("{");
  const lastBrace = candidate.lastIndexOf("}");
  if (firstBrace >= 0 && lastBrace > firstBrace) {
    const objectCandidate = candidate.slice(firstBrace, lastBrace + 1);
    try {
      const parsedObject = JSON.parse(objectCandidate);
      if (parsedObject && typeof parsedObject === "object" && !Array.isArray(parsedObject)) {
        return parsedObject;
      }
    } catch {
      // Continue with the normal parsing paths to produce a useful diagnostic.
    }
  }

  // GitHub secret may have been copied without the outer opening brace.
  if (candidate.startsWith('"') && candidate.includes(':')) {
    const repaired = candidate.endsWith('}') ? `{${candidate}` : `{${candidate}}`;
    try {
      const parsed = JSON.parse(repaired);
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) return parsed;
    } catch {
      // Do not guess further; continue with standard parsing and safe diagnostics.
    }
  }

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
      if (candidate.length >= 2 && candidate[0] === '"' && candidate[candidate.length - 1] === '"') {
        candidate = candidate.slice(1, -1).trim();
        continue;
      }
      const detail = error instanceof SyntaxError ? error.message : error.message;
      const firstNonSpace = candidate.match(/\S/)?.[0] ?? "(empty)";
      const safeShape = Array.from(candidate.slice(0, 12)).map((ch) => {
        if (/[A-Za-z]/.test(ch)) return "L";
        if (/[0-9]/.test(ch)) return "D";
        if (/\s/.test(ch)) return "W";
        return ch;
      }).join("");
      throw new Error(
        `FIREBASE_SERVICE_ACCOUNT_JSON could not be parsed (${detail}). Safe diagnostics: length=${candidate.length}, firstNonSpace=${JSON.stringify(firstNonSpace)}, first12Shape=${JSON.stringify(safeShape)}. No secret contents were printed. Store the complete raw service-account JSON object as the secret.`
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
