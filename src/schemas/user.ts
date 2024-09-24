import z from "zod";

export const userSchema = z.object({
  username: z.string({
    invalid_type_error: "Username must be a string",
    required_error: "Username is required",
  }),
  googleId: z.string({
    invalid_type_error: "Google ID must be a string",
    required_error: "Google ID is required",
  }),
  packs: z.number({
    invalid_type_error: "Packs must be a number",
    required_error: "Packs is required",
  }),
  album: z.array(
    z.any()
  ),
  cards: z.array(
    z.any()
  ),
});

export const partialUserSchema = userSchema.partial().strict()