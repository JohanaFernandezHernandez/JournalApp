// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE9p3SfJjhDtGsYvqCRdXVZ2PfqopAChQ",
  authDomain: "react-cursos-23e9a.firebaseapp.com",
  projectId: "react-cursos-23e9a",
  storageBucket: "react-cursos-23e9a.appspot.com",
  messagingSenderId: "265064161334",
  appId: "1:265064161334:web:22a3fffed27da8518bf897"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore( FirebaseApp);
