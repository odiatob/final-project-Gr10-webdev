// src/firebaseConfig.js
import { initializeApp, getApps, getApp } from 'firebase/app'; // Import getApps and getApp
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration object
const firebaseConfig = {
  apiKey: 'your-api-key',
  authDomain: 'your-auth-domain',
  projectId: 'your-project-id',
  storageBucket: 'your-storage-bucket',
  messagingSenderId: 'your-messaging-sender-id',
  appId: 'your-app-id',
  measurementId: 'your-measurement-id',
};

// Initialize Firebase (only if not initialized already)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp(); // Ensure Firebase is initialized only once

// Export Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
