import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDML3frKVID0L9aausje9_nLkCuw4vJIaU",
  authDomain: "notes-website-f9b8f.firebaseapp.com",
  projectId: "notes-website-f9b8f",
  storageBucket: "notes-website-f9b8f.firebasestorage.app",
  messagingSenderId: "274089599582",
  appId: "1:274089599582:web:5952414dbf1a1e78f20acf",
  measurementId: "G-03FQQF537M"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const google = new GoogleAuthProvider();
