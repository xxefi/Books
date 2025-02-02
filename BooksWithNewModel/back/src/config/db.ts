import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "./cs.env") });

export const connectDB = async () => {
  try {
    const connectionString = process.env.MONGODB_URI;

    if (!connectionString) {
      throw new Error("MongoDB URI is not defined in environment variables");
    }

    await mongoose.connect(connectionString);
    console.log("MongoDB Connected...");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }
};
