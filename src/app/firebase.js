// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEa7iFkgAYhX03i04gNK3SZImO6IBqJAA",
  authDomain: "datcrazyblog.firebaseapp.com",
  projectId: "datcrazyblog",
  storageBucket: "datcrazyblog.appspot.com",
  messagingSenderId: "1038402309903",
  appId: "1:1038402309903:web:30828ffd637eeb50d2f87a",
  measurementId: "G-VGB0E0ZY2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);