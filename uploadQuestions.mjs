import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, writeBatch } from "firebase/firestore";
import fs from "fs";

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function uploadQuestions() {
  try {
    const rawData = fs.readFileSync("./questions.json", "utf8");
    const questions = JSON.parse(rawData);

    console.log(`Starting upload of ${questions.length} questions to Firestore...`);

    const batchSize = 400;
    for (let i = 0; i < questions.length; i += batchSize) {
      const batch = writeBatch(db);
      const chunk = questions.slice(i, i + batchSize);

      chunk.forEach((q, index) => {
        const docRef = doc(db, "questions", `q_${i + index + 1}`);
        batch.set(docRef, q);
      });

      await batch.commit();
      console.log(`Uploaded batch ${Math.floor(i / batchSize) + 1}`);
    }

    console.log("All questions successfully uploaded to Firestore!");
    process.exit(0);
  } catch (error) {
    console.error("Error uploading questions:", error);
    process.exit(1);
  }
}

uploadQuestions();
