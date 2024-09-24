import z from "zod";
import { Team } from "../constants/teams";

export const badgeSchema = z.object({
  photoUrl: z.string({
    invalid_type_error: "Photo URL must be a string",
    required_error: "Photo URL is required",
  }),
  team: z.nativeEnum(Team, {
    invalid_type_error: "Team must be an actual LPF team",
    required_error: "Team is required",
  }),
});