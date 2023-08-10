import { initalizeApp } from "firebase/app";
import getFirestore, collection from 'firebase/firestore'
import { Data } from "../types";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectID: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderID: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appID: import.meta.env.VITE_APP_ID

}
initializeApp(firebaseConfig);

const db = getFirestore();

export const getAllData = async () => {
  try {
    const querySnapshot = await db.collection("links").get();

    const formattedData: Data[] = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return formattedData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
