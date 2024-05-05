// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9MnaBUVgtIoGC5qHavkvRfFlmLN7ujqY",
  authDomain: "abrar-utube.firebaseapp.com",
  projectId: "abrar-utube",
  storageBucket: "abrar-utube.appspot.com",
  messagingSenderId: "574593220658",
  appId: "1:574593220658:web:a7bcdbd019e3ef66743c2b",
  measurementId: "G-R2QFXZ9B08",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
