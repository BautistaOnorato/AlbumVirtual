import z from "zod";
import { Team } from "../constants/teams";
import { Foot } from "../constants/foot";
import { Position } from "../constants/position";

export const playerSchema = z.object({
  index: z.number({
    invalid_type_error: "Index must be a number",
    required_error: "Index is required",
  }),
  name: z.string({
    invalid_type_error: "Name must be a string",
    required_error: "Name is required",
  }),
  photoUrl: z.string({
    invalid_type_error: "Photo URL must be a string",
    required_error: "Photo URL is required",
  }),
  team: z.nativeEnum(Team, {
    invalid_type_error: "Team must be an actual LPF team",
    required_error: "Team is required",
  }),
  height: z.number({
    invalid_type_error: "Height must be a number",
    required_error: "Height is required",
  }),
  weight: z.number({
    invalid_type_error: "Weight must be a number",
    required_error: "Weight is required",
  }),
  birthDate: z.string({
    invalid_type_error: "Birth Date must be a string",
    required_error: "Birth Date is required",
  }),
  foot: z.nativeEnum(Foot, {
    invalid_type_error: "Foot must be 'Left', 'Right', or 'Both'",
    required_error: "Foot is required",
  }),
  position: z.nativeEnum(Position, {
    invalid_type_error:
      "Position must be 'Goalkeeper', 'Defender', 'Midfielder', or 'Forward'",
    required_error: "Position is required",
  }),
});
