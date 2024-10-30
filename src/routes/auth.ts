import { Router } from "express"

import passport from "passport"
import { client } from "../config/config"
import { AuthController } from "../controllers/auth"

export const createAuthRouter = () => {
  const authController = new AuthController()
  const authRouter = Router()

  authRouter.get("/login/google", passport.authenticate("google"))
  authRouter.get("/google/callback", passport.authenticate("google"), (req, res) => {
    res.redirect(`${client.CLIENT_URL}/`)
  })

  authRouter.post("/logout", authController.logout)

  return authRouter
}