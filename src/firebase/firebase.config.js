// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi9GcJjxM1I-goVG3RweEPnFME3Idcgx0",
  authDomain: "signin-signup-form-2915a.firebaseapp.com",
  projectId: "signin-signup-form-2915a",
  storageBucket: "signin-signup-form-2915a.appspot.com",
  messagingSenderId: "51941602726",
  appId: "1:51941602726:web:c2307ebcaa3ded6bfb8b67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
