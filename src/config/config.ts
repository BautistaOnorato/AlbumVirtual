import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export const DEVELOPMENT = process.env.NODE_ENV === "development";
export const TEST = process.env.NODE_ENV === "test";
export const MONGO_URI = process.env.MONGO_URI || ''
export const MONGO_OPTIONS: mongoose.ConnectOptions = { retryWrites: true, w: "majority" }
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
export const GOOGLE_SECRET = process.env.GOOGLE_SECRET || '';
export const PORT = process.env.PORT ?? 8000;
export const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";

export const mongo = {
  MONGO_URI,
  MONGO_OPTIONS,
}

export const google = {
  GOOGLE_CLIENT_ID,
  GOOGLE_SECRET,
}

export const SERVER = {
  SERVER_HOSTNAME,
  PORT,
};
