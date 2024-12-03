// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
apiKey: "AIzaSyAMTIZ7rPP-j81d2At2O0iPUh2yu-5YPao",
authDomain: "final-webdev.firebaseapp.com",
projectId: "final-webdev",
storageBucket: "final-webdev.firebasestorage.app",
messagingSenderId: "980449241259",
appId: "1:980449241259:web:b963d26e0160bc047f2fee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

// Export the initialized Firestore and Auth instances
export { db, auth };


