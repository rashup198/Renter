// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "renting-170de.firebaseapp.com",
  projectId: "renting-170de",
  storageBucket: "renting-170de.appspot.com",
  messagingSenderId: "127238800964",
  appId: "1:127238800964:web:5c83b1820884c9c0cc5e11"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);