

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
 import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtM89s8-htPa-UZJdiSlNz35EgowqZtWI",
  authDomain: "neflix-gpt.firebaseapp.com",
  projectId: "neflix-gpt",
  storageBucket: "neflix-gpt.appspot.com",
  messagingSenderId: "700170497493",
  appId: "1:700170497493:web:d0b09ee771602a9081615c",
  measurementId: "G-78CDPF9X43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();