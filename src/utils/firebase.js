// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQKOLKWJ6KRjOP07SFjFa-zH1QdREgWtQ",
  authDomain: "netflixgpt-829ba.firebaseapp.com",
  projectId: "netflixgpt-829ba",
  storageBucket: "netflixgpt-829ba.appspot.com",
  messagingSenderId: "349913228586",
  appId: "1:349913228586:web:d6253c0f086d5e8739aa53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();