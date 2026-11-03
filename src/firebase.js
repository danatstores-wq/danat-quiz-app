import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8e7z-aAeuhQiWapxX7yLNZar_ngsqtk",
  authDomain: "danat-quiz-app.firebaseapp.com",
  projectId: "danat-quiz-app",
  storageBucket: "danat-quiz-app.appspot.com",
  messagingSenderId: "436991893081",
  appId: "1:436991893081:web:5aaf9cbb3275c7f6139b48",
  measurementId: "G-QWT2267WC4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
