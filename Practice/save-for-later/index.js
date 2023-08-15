import firebase from "firebase/app";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig"; 
import { Data } from "../types";

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export const getAllData = async (): Promise<Data[]> => {
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
