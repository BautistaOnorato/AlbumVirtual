import mongoose, { Schema } from "mongoose";
import { Team } from "../constants/teams";

export const cardSchema = new Schema({
  index: {
    type: Number,
    required: true,
  },
  photoUrl: {
    type: String,
    required: true,
    unique: true,
  },
  team: {
    type: String,
    enum: Team,
    required: true,
  },
});

export const Card = mongoose.model("Card", cardSchema);
