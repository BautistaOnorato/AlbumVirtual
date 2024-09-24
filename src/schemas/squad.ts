import z from "zod"

export const squadSchema = z.object({
  photoUrl: z.string({
    invalid_type_error: "Photo URL must be a string",
    required_error: "Photo URL is required",
  }),
})