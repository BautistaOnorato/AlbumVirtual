import z from "zod";
import { partialUserSchema } from "../schemas/user";
import { User } from "../models/user";

export class UserRepository {
  async getUser(id: string) {
    try {
      const user = await User.findById(id);
      return user;
    } catch (error) {
      logging.error(error);
      return error;
    }
  }
  
  async updateUser(data: z.infer<typeof partialUserSchema>, id: string) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: id },
        { ...data },
        {
          new: true,
        }
      )
      return user
    } catch (error) {
      logging.error(error);
      return error;
    }
  }

  
}