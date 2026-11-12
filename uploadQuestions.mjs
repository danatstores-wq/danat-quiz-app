import dotenv from "dotenv";
dotenv.config();

// Debug check to see if dotenv is actually reading the .env file
console.log("🔍 Checking .env load -> API Key found:", process.env.VITE_FIREBASE_API_KEY ? "YES (Length: " + process.env.VITE_FIREBASE_API_KEY.length + ")" : "NO (Undefined)");

import { db } from "./src/firebase.js";
import { collection, doc, writeBatch } from "firebase/firestore";
import fs from "fs";

// CONFIGURATION FOR UPLOAD
const START_INDEX = 0; 
const DAILY_LIMIT = null; // Set to null to process all items to the end

async function uploadQuestions() {
  try {
    const rawData = fs.readFileSync("./questions.json", "utf8");
    const questions = JSON.parse(rawData);

    // Slice the array starting from START_INDEX to the end (or limit if set)
    const chunkToUpload = DAILY_LIMIT 
      ? questions.slice(START_INDEX, START_INDEX + DAILY_LIMIT)
      : questions.slice(START_INDEX);

    if (chunkToUpload.length === 0) {
      console.log("⚠️ All questions have been uploaded! No items left in this range.");
      process.exit(0);
    }

    console.log(`Starting upload of chunk: ${chunkToUpload.length} total items to Firestore...`);

    // Firestore batch writes have a hard limit of 500 operations per batch.
    const batchSize = 400;
    
    for (let i = 0; i < chunkToUpload.length; i += batchSize) {
      const batch = writeBatch(db);
      const subChunk = chunkToUpload.slice(i, i + batchSize);

      subChunk.forEach((q) => {
        // Use q.id directly (e.g., "q311") as the document key in Firestore
        const docRef = doc(db, "questions", q.id);
        batch.set(docRef, q);
      });

      await batch.commit();
      console.log(`Uploaded sub-batch ${Math.floor(i / batchSize) + 1} (processed up to item index ${START_INDEX + i + subChunk.length})`);
    }

    console.log("✅ All remaining questions successfully uploaded to Firestore!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error uploading questions:", error);
    process.exit(1);
  }
}

uploadQuestions();