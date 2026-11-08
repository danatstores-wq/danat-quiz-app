import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Safely resolve the API key for both Vite (import.meta.env) and Node.js/GitHub Actions (process.env)
const getApiKey = () => {
  try {
    if (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_FIREBASE_API_KEY) {
      return import.meta.env.VITE_FIREBASE_API_KEY;
    }
  } catch (e) {
    // Ignore import.meta error if thrown
  }
  return process.env.VITE_FIREBASE_API_KEY;
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