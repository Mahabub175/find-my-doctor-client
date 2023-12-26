// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqS0k1-LHqiBOC4KaeDEvO_MpYkU6CAUw",
  authDomain: "find-my-doctor-8c735.firebaseapp.com",
  projectId: "find-my-doctor-8c735",
  storageBucket: "find-my-doctor-8c735.appspot.com",
  messagingSenderId: "933780958858",
  appId: "1:933780958858:web:ae53a61cab999dfe03c773",
  measurementId: "G-NPBGSZSRML",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
