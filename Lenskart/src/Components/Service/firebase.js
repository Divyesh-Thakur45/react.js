// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdIXNbx2OKw-irvasNLNIib7s_un4vs5A",
  authDomain: "signin-07.firebaseapp.com",
  projectId: "signin-07",
  storageBucket: "signin-07.appspot.com",
  messagingSenderId: "1071941776208",
  appId: "1:1071941776208:web:573636535cff7a783fb255",
  measurementId: "G-TVD7L6E9CJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
