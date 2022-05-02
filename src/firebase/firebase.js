// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsjVtuKujDKbYTkQqjW-0gdXxKoMxhEkA",
  authDomain: "movie-app-cd67f.firebaseapp.com",
  projectId: "movie-app-cd67f",
  storageBucket: "movie-app-cd67f.appspot.com",
  messagingSenderId: "308356270969",
  appId: "1:308356270969:web:293f360df235faeef03da8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
