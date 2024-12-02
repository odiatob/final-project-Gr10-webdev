// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAMITZ7rPP-j81d2At2001iPUh2yu-5YPao",
  authDomain: "final-webdev.firebaseapp.com",
  projectId: "final-webdev",
  storageBucket: "final-webdev.appspot.com",
  messagingSenderId: "9080449241259",
  appId: "1:9080449241259:web:b963d26e0160bcb047f2fee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
