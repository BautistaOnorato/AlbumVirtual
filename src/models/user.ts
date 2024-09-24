import mongoose, { Schema } from "mongoose";
import { cardSchema } from "./card";

export const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    googleId: {
      type: String,
      required: true,
      unique: true,
    },
    packs: {
      type: Number,
      default: 10,
    },
    album: {
      type: [cardSchema],
      default: [],
    },
    cards: {
      type: [cardSchema],
      default: [],
    }
  }
);

export const User = mongoose.model("User", userSchema)