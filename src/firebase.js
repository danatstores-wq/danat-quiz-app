// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8e7z-aAEuuhQiWapxX7yLNZar_ngsqtk",
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
