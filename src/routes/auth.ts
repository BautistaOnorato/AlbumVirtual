import { Router } from "express"

import passport from "passport"

export const createAuthRouter = () => {
  const authRouter = Router()

  authRouter.get("/login/google", passport.authenticate("google"), (req, res) => {
    return res.status(200).json(req.user)
  })
  authRouter.get("/google/callback", passport.authenticate("google"), (req, res) => {
    res.status(200).send(req.user)
  })

  return authRouter
}