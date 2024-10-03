import { Router } from "express"

import passport from "passport"
import { client } from "../config/config"

export const createAuthRouter = () => {
  const authRouter = Router()

  authRouter.get("/login/google", passport.authenticate("google"))
  authRouter.get("/google/callback", passport.authenticate("google"), (req, res) => {
    res.redirect(`${client.CLIENT_URL}/`)
  })

  return authRouter
}