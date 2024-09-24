import mongoose, { Schema } from "mongoose";
import { Foot } from "../constants/foot";
import { Position } from "../constants/position";
import { Team } from "../constants/teams";
import { CardType } from "../constants/cardType";

export const cardSchema = new Schema({
  type: {
    type: String,
    enum: CardType,
    required: true,
  },
  index: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
  },
  photoUrl: {
    type: String,
    required: true,
    unique: true,
  },
  team: {
    type: String,
    enum: Team,
  },
  height: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  birthDate: {
    type: Date,
  },
  foot: {
    type: String,
    enum: Foot,
  },
  position: {
    type: String,
    enum: Position,
  },
});

export const Card = mongoose.model("Card", cardSchema);
