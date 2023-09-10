// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9-nwuMUrfTYeBEmnkD7DhcGY5FL97AjM",
  authDomain: "netflixgpt-73b1c.firebaseapp.com",
  projectId: "netflixgpt-73b1c",
  storageBucket: "netflixgpt-73b1c.appspot.com",
  messagingSenderId: "934249386874",
  appId: "1:934249386874:web:bf82f02ac03938beb6bcc3",
  measurementId: "G-M77B2V2NK0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();