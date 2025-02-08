'use client';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { Analytics, getAnalytics, isSupported } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPWIJa8mJHvDr1A9dQkUQlwHPdO7lJemo",
  authDomain: "ketsuna-421923.firebaseapp.com",
  databaseURL: "https://ketsuna-421923-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ketsuna-421923",
  storageBucket: "ketsuna-421923.firebasestorage.app",
  messagingSenderId: "14900042043",
  appId: "1:14900042043:web:3ef2b89af500056ed0ff1e",
  measurementId: "G-T15BVQ57BV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
let analytics: Analytics;
if(await isSupported()) {
    analytics = getAnalytics(app);
}

export { analytics, auth, app };
