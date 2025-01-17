// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2FleRTJ8fzvN9lBYoIzX5Ua1aFCLtcP0",
  authDomain: "netflixgpt-1e9be.firebaseapp.com",
  projectId: "netflixgpt-1e9be",
  storageBucket: "netflixgpt-1e9be.firebasestorage.app",
  messagingSenderId: "735369902077",
  appId: "1:735369902077:web:52c6603167c628748d4b94",
  measurementId: "G-3XX42E6RS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

