import dotenv from "dotenv";
dotenv.config();

import { db } from "./src/firebase.js";
import { collection, doc, getDocs, writeBatch } from "firebase/firestore";
import fs from "node:fs";

// Safe append-only uploader:
// - Reads the current question IDs once.
// - Creates only IDs that do not already exist.
// - Never overwrites an existing question document.
const BATCH_SIZE = 400;

async function uploadQuestions() {
  const rawData = fs.readFileSync("./questions.json", "utf8");
  const questions = JSON.parse(rawData);

  if (!Array.isArray(questions)) {
    throw new Error("questions.json must contain an array.");
  }

  const seenIds = new Set();
  for (const question of questions) {
    if (!question || typeof question.id !== "string" || !question.id.trim()) {
      throw new Error("Every question must have a non-empty string id.");
    }
    if (seenIds.has(question.id)) {
      throw new Error(`Duplicate question ID in questions.json: ${question.id}`);
    }
    seenIds.add(question.id);
  }

  console.log(`Checking existing Firestore question IDs for ${questions.length} local questions...`);
  const existingSnapshot = await getDocs(collection(db, "questions"));
  const existingIds = new Set(existingSnapshot.docs.map((item) => item.id));

  const newQuestions = questions.filter((question) => !existingIds.has(question.id));

  if (newQuestions.length === 0) {
    console.log("No new questions to add. Existing Firestore questions were left unchanged.");
    return;
  }

  console.log(`Appending ${newQuestions.length} new questions; skipping ${questions.length - newQuestions.length} existing IDs.`);

  for (let start = 0; start < newQuestions.length; start += BATCH_SIZE) {
    const batch = writeBatch(db);
    const chunk = newQuestions.slice(start, start + BATCH_SIZE);

    for (const question of chunk) {
      // IDs were checked above; only missing IDs are written.
      batch.set(doc(db, "questions", question.id), question);
    }

    await batch.commit();
    console.log(`Created ${Math.min(start + chunk.length, newQuestions.length)} of ${newQuestions.length} new questions.`);
  }

  console.log("Append-only upload complete. Existing question documents were not modified.");
}

uploadQuestions().catch((error) => {
  console.error("Question upload failed:", error);
  process.exitCode = 1;
});
