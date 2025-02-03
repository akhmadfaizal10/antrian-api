// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbc7EoaXeq66BvQE0b2Tq6HOlXQOYoFd4",
  authDomain: "antrian-db.firebaseapp.com",
  projectId: "antrian-db",
  storageBucket: "antrian-db.firebasestorage.app",
  messagingSenderId: "891745812210",
  appId: "1:891745812210:web:c46cde00def79c38dcda6b",
  measurementId: "G-JD6EWQ93QH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);