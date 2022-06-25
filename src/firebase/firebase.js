// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Your web app's Firebase configuration
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCsjVtuKujDKbYTkQqjW-0gdXxKoMxhEkA",
  authDomain: "movie-app-cd67f.firebaseapp.com",
  projectId: "movie-app-cd67f",
  storageBucket: "movie-app-cd67f.appspot.com",
  messagingSenderId: "308356270969",
  appId: "1:308356270969:web:5466c2b4041aa862f03da8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
export const register = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
