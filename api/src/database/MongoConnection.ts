import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export class Connection {
  static async connect() {
    try {
      await mongoose.connect(process.env.DB_URI as string);
      console.log("Database connected");
    } catch (error: unknown) {
      throw new Error((error as Error).message);
    }
  }

  static async disconnect() {
    try {
      await mongoose.disconnect();
    } catch (error: unknown) {
      throw new Error((error as Error).message);
    }
  }
}
