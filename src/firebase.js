import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Safely resolve the API key: check process.env first (for Node scripts), then import.meta.env (for Vite browser)
const getApiKey = () => {
  if (process.env.VITE_FIREBASE_API_KEY) {
    return process.env.VITE_FIREBASE_API_KEY;
  }
  try {
    if (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_FIREBASE_API_KEY) {
      return import.meta.env.VITE_FIREBASE_API_KEY;
    }
  } catch (e) {
    // Ignore import.meta error if thrown
  }
  return undefined;
};

const firebaseConfig = {
  apiKey: getApiKey(),
  authDomain: "danat-quiz-app.firebaseapp.com",
  projectId: "danat-quiz-app",
  storageBucket: "danat-quiz-app.firebasestorage.app",
  messagingSenderId: "436991893081",
  appId: "1:436991893081:web:5aaf9cbb3275c7f6139b48",
  measurementId: "G-QWT2287WC4"
};

const app = initializeApp(firebaseConfig);

let analytics = null;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export const auth = getAuth(app);
export const db = getFirestore(app);