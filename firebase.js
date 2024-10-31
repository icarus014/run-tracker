import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Import additional Firebase SDKs as needed
// import { getAnalytics } from "firebase/analytics";

// Firebase configuration


// Initialize Firebase only if it hasn’t been initialized already
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firestore and export it
export const db = getFirestore(app);