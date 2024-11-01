import { Express } from "express"
import { createAuthRouter } from "./auth"
import { createCardRouter } from "./card"
import { createUserRouter } from "./user"

export const createRoutes = (app: Express) => {
  app.get("/", (req, res) => {
    res.send("Hello World!")
  })
  app.use("/ping", (req, res) => {
    res.send("pong")
  })
  app.use("/auth", createAuthRouter())
  // app.use("/card", createCardRouter())
  app.use("/user", createUserRouter())
}