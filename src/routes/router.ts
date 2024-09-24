import { Express } from "express"
import { createAuthRouter } from "./auth"
import { createCardRouter } from "./card"
import { createUserRouter } from "./user"

export const createRoutes = (app: Express) => {
  app.use("/auth", createAuthRouter())
  app.use("/card", createCardRouter())
  app.use("/user", createUserRouter())
}