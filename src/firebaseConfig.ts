// src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyDvsrBY3PvBBDcDGZLVAYLA6pALQkmv6vU",
    authDomain: "factocor.firebaseapp.com",
    projectId: "factocor",
    storageBucket: "factocor.appspot.com",
    messagingSenderId: "693366799762",
    appId: "1:693366799762:web:9909a3533e8c94f814954b",
    measurementId: "G-Z4BL36HWMQ"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };