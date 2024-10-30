import { Request, Response } from "express";
import { Authenticated } from "../decorators/authenticated";

export class AuthController {
  @Authenticated()
  async logout(req: Request, res: Response) {
    req.logOut((err) => {
      if (err) {
        return res.status(400).json({ error: "Failed to log out" });
      }
      return res.status(200).json({ message: "Logged out" });
    });
  }
}
