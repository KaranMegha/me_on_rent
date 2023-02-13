// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';    
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDtIw8lFO7N7y4rlV5azFwM10DELb0xEo",
  authDomain: "meonrent-3e10f.firebaseapp.com",
  projectId: "meonrent-3e10f",
  storageBucket: "meonrent-3e10f.appspot.com",
  messagingSenderId: "312824034329",
  appId: "1:312824034329:web:0128e9333ce3c832066688"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);