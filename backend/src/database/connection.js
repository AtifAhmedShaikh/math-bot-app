import mongoose from "mongoose";
import process from "node:process";

const connectMongoDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.DATABASE_URI);
    console.log("database connected successfully !", connectionInstance?.connections[0]?.host);
  } catch (error) {
    console.log("database connection field", error);
  }
};

export { connectMongoDB };
