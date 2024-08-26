// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9Pum_g-lwDXomCvO16l_wLNVyhEjNFGU",
  authDomain: "json-data-45.firebaseapp.com",
  projectId: "json-data-45",
  storageBucket: "json-data-45.appspot.com",
  messagingSenderId: "481305418968",
  appId: "1:481305418968:web:b8fa247c794c37275e8bad",
  measurementId: "G-XSLSC9KCDP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);