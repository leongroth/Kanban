// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2w9YA5ZWDMLd-4gZQpudRwm9aaPcLZuQ",
  authDomain: "expkanban.firebaseapp.com",
  databaseURL: "https://expkanban-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "expkanban",
  storageBucket: "expkanban.firebasestorage.app",
  messagingSenderId: "977724809399",
  appId: "1:977724809399:web:5eea394db7ed5d691fad32",
  measurementId: "G-VLP8HDQRKY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getDatabase(app)