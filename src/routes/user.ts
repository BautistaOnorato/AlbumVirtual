import { Router } from "express"
import { UserController } from "../controllers/user"

export const createUserRouter = () => {
  const userRouter = Router()

  const userController = new UserController()

  userRouter.get("/me", userController.getUser)
  userRouter.get("/short", userController.getShortUser)
  userRouter.get("/cards", userController.getCards)
  userRouter.get("/pack", userController.openPack)
  userRouter.patch("/update", userController.updateUser)
  userRouter.patch("/redeem", userController.updateLastRedeem)
  userRouter.patch("/paste/:cardId", userController.pasteCard)

  return userRouter
}