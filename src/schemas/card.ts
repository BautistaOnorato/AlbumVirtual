import z from "zod";
import { Team } from "../constants/teams";

export const cardSchema = z.object({
  index: z.number({
    invalid_type_error: "Index must be a number",
    required_error: "Index is required",
  }),
  photoUrl: z.string({
    invalid_type_error: "Photo URL must be a string",
    required_error: "Photo URL is required",
  }),
  team: z.nativeEnum(Team, {
    invalid_type_error: "Team must be an actual LPF team short name",
    required_error: "Team is required",
  }),
});
