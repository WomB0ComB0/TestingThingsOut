import { MongoClient } from "mongodb";
import { Data } from "../types";

const connectToDB = async () => {
  let dbClient: MongoClient | undefined;
  if (dbClient) {
    console.log("MongoDB connection already established");
    return dbClient;
  }
  try {
    dbClient = new MongoClient(import.meta.env.VITE_MONGODB_URL);
    await dbClient.connect();
    console.log("MongoDB connected");
    return dbClient;
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
    throw error;
  }
};

export const getAllData = async (): Promise<Data[]> => {
  try {
    const client = await connectToDB();
    const db = client.db("MyLinks");
    const collection = db.collection("links");
    const allData = await collection.find().toArray();

    const formattedData: Data[] = allData.map(item => ({
      id: item._id.toString(),
      name: item.name,
      link: item.link,
      image: item.image,
      description: item.description,
      featured: item.featured,
    }));

    return formattedData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
