// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2cp7NaTLREAP6QwTdrcAqJDJ4EYnnTIo",
  authDomain: "tourism-management-aed7f.firebaseapp.com",
  projectId: "tourism-management-aed7f",
  storageBucket: "tourism-management-aed7f.appspot.com",
  messagingSenderId: "36675053077",
  appId: "1:36675053077:web:d401a112327a25ab5f501c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;