// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "danat-quiz-app.firebaseapp.com",
  projectId: "danat-quiz-app",
  storageBucket: "danat-quiz-app.firebasestorage.app",
  messagingSenderId: "436991893081",
  appId: "1:436991893081:web:5aaf9cbb3275c7f6139b48",
  measurementId: "G-QWT2287WC4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
