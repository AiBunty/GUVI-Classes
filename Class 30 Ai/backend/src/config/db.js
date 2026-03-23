import mongoose from "mongoose";

export default async function connectDatabase() {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error("MONGODB_URI is missing in the environment configuration.");
  }

  await mongoose.connect(mongoUri);
  console.log("MongoDB connected successfully.");
}

