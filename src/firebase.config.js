import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDh6NX1lSNBLCFVjRX1GiArOpHhR0IppvY",
  authDomain: "megabazaar-999d3.firebaseapp.com",
  projectId: "megabazaar-999d3",
  storageBucket: "megabazaar-999d3.appspot.com",
  messagingSenderId: "823162622011",
  appId: "1:823162622011:web:ac47ac1fa9f84ab633cc1e",
  measurementId: "G-FZEGZPLPHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app