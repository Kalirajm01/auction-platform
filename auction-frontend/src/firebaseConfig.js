// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app'; // Note the use of 'compat' for Firebase version 9+
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdvcms4vJF2-ItQ_920RmuBrWzPukwO08",
  authDomain: "auction-platform-4f7e3.firebaseapp.com",
  projectId: "auction-platform-4f7e3",
  storageBucket: "auction-platform-4f7e3.appspot.com",
  messagingSenderId: "857858094506",
  appId: "1:857858094506:web:d6a8bfa7b545c65e1167d3",
  measurementId: "G-LR09MYB130"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const firestore = app.firestore(); // Initialize Firestore

export default firebaseConfig;