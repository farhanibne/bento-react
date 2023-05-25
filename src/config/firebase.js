
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCUMpJ2nBBqKVjVJ-Jgi9ZbslpVtLf5M_8",
  authDomain: "getabento.firebaseapp.com",
  projectId: "getabento",
  storageBucket: "getabento.appspot.com",
  messagingSenderId: "387687588208",
  appId: "1:387687588208:web:ba99c6aeb0b780acafefb5",
  measurementId: "G-1GXG39EFS1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);