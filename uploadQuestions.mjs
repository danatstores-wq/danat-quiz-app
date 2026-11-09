import dotenv from "dotenv";
dotenv.config();

import { db } from "./src/firebase.js";
import { collection, doc, writeBatch } from "firebase/firestore";
import fs from "fs";

// CONFIGURATION FOR DAILY BATCHES
const START_INDEX = 300; // Change this tomorrow to 600, then 900, etc.
const DAILY_LIMIT = 300;  // Your safe daily upload limit

async function uploadQuestions() {
  try {
    const rawData = fs.readFileSync("./questions.json", "utf8");
    const questions = JSON.parse(rawData);

    // Slice the array starting from our daily offset up to the limit
    const chunkToUpload = questions.slice(START_INDEX, START_INDEX + DAILY_LIMIT);

    if (chunkToUpload.length === 0) {
      console.log("⚠️ All questions have been uploaded! No items left in this range.");
      process.exit(0);
    }

    console.log(`Starting upload of chunk: questions ${START_INDEX + 1} to ${START_INDEX + chunkToUpload.length} (${chunkToUpload.length} total) to Firestore...`);

    // Firestore batch writes have a hard limit of 500 operations per batch.
    // Keeping this at 400 or lower is safe.
    const batchSize = 400;
    
    for (let i = 0; i < chunkToUpload.length; i += batchSize) {
      const batch = writeBatch(db);
      const subChunk = chunkToUpload.slice(i, i + batchSize);

      subChunk.forEach((q, index) => {
        // Calculate the absolute global index for document naming (e.g., q_301, q_302...)
        const globalIndex = START_INDEX + i + index + 1;
        const docRef = doc(db, "questions", `q_${globalIndex}`);
        batch.set(docRef, q);
      });

      await batch.commit();
      console.log(`Uploaded sub-batch ${Math.floor(i / batchSize) + 1} (ending at global index ${START_INDEX + i + subChunk.length})`);
    }

    console.log("✅ Today's 300-question batch successfully uploaded to Firestore!");
    console.log(`💡 Remember to update START_INDEX to ${START_INDEX + DAILY_LIMIT} for your next upload.`);
    process.exit(0);
  } catch (error) {
    console.error("❌ Error uploading questions:", error);
    process.exit(1);
  }
}

uploadQuestions();
