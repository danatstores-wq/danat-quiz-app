import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8e7z-aAeuhQiWapxX7yLNZar_ngsqtk",
  authDomain: "danat-quiz-app.firebaseapp.com",
  projectId: "danat-quiz-app",
  storageBucket: "danat-quiz-app.firebasestorage.app",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
