
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpAMhO2FrcKDEupgJpIKMLSY1lFywMEpE",
  authDomain: "dragon-news-hilights.firebaseapp.com",
  projectId: "dragon-news-hilights",
  storageBucket: "dragon-news-hilights.firebasestorage.app",
  messagingSenderId: "100489323487",
  appId: "1:100489323487:web:c5e614f5d2de9c00735a6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;