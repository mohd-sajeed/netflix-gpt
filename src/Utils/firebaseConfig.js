// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9tSzMFUIxEzi2giDxUjEYL6z-Je5ieOI",
  authDomain: "netflixgpt-ac536.firebaseapp.com",
  projectId: "netflixgpt-ac536",
  storageBucket: "netflixgpt-ac536.appspot.com",
  messagingSenderId: "462082953073",
  appId: "1:462082953073:web:a549cab6313f0e4ce870d0",
  measurementId: "G-CVFKH214DB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);