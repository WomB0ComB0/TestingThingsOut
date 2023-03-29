// import firebase from 'firebase/app';
import "firebase/auth";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_REACT_TS_AUTH_API_KEY,
  authDomain: process.env.VITE_FIREBASE_REACT_TS_AUTH_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_REACT_TS_AUTH_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_REACT_TS_AUTH_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_REACT_TS_AUTH_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_REACT_TS_AUTH_APP_ID,
  measurementId: process.env.VITE_FIREBASE_REACT_TS_AUTH_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app as default, auth};

// export const auth = app.getAuth
// export default app