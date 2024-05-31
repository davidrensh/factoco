// src/firebaseConfig.ts
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };

const firebaseConfig = {
    apiKey: "AIzaSyDvsrBY3PvBBDcDGZLVAYLA6pALQkmv6vU",
    authDomain: "factocor.firebaseapp.com",
    projectId: "factocor",
    storageBucket: "factocor.appspot.com",
    messagingSenderId: "693366799762",
    appId: "1:693366799762:web:9909a3533e8c94f814954b",
    measurementId: "G-Z4BL36HWMQ"
  };
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
