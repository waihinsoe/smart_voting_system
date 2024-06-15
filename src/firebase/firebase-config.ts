// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwWzqzQlMdKrRYM_VQvnqryXoZqu_7-1E",
  authDomain: "smart-voting-system-ef4d5.firebaseapp.com",
  databaseURL:
    "https://smart-voting-system-ef4d5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-voting-system-ef4d5",
  storageBucket: "smart-voting-system-ef4d5.appspot.com",
  messagingSenderId: "67831783184",
  appId: "1:67831783184:web:3ce38e50f5d81280504f95",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
