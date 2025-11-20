import mongoose from "mongoose";

export const conectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDb Conected :${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB conection error", error);
  }
};
