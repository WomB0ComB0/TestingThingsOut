// import DataModel from "./mongoose";
// export const getAllData = async () => {
//   try {
//     const allData = await DataModel.find();
//     return allData;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return [];
//   }
// };


import { MongoClient, ServerApiVersion } from "mongodb";
const uri = "lol u thought";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("MyLinks");
    const collection = db.collection("links");

    const query = {};
    const options = {};

    const fetchedData = await collection.find(query, options).toArray();
    console.log("Fetched data:", fetchedData);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    await client.close();
    console.log("MongoDB connection closed");
  }
}
run().catch(console.dir);