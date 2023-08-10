import { collection, getDocs } from "firebase/firestore";
import  db from "./firebaseConfig.js";

export const getAllDataFromFirestore = async () => {
  try {
    const colRef = collection(db, "links");
    const querySnapshot = await getDocs(colRef);

    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    console.log("Data from Firestore:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data from Firestore:", error);
    return [];
  }
};
