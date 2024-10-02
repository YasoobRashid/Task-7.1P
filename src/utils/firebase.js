import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyAyZw9IYUPnM69WXsvN07b5IHWh6xxc-DA",
  authDomain: "task7-1a369.firebaseapp.com",
  projectId: "task7-1a369",
  storageBucket: "task7-1a369.appspot.com",
  messagingSenderId: "506180879816",
  appId: "1:506180879816:web:91eaceaaea18b191492cfd",
  measurementId: "G-RKRVNYE2WN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); 

export { auth, db }; 
