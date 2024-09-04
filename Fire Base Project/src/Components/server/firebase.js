// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEYO2RueEMfu5QiEPYsnOHtHQaexJilBc",
  authDomain: "randomsign.firebaseapp.com",
  projectId: "randomsign",
  storageBucket: "randomsign.appspot.com",
  messagingSenderId: "677915818489",
  appId: "1:677915818489:web:a2e568bc2e4ea8bd57a528",
  measurementId: "G-RYEMTVYVXC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
