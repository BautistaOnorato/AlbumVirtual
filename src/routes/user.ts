import { Router } from "express"
import { UserController } from "../controllers/user"

export const createUserRouter = () => {
  const userRouter = Router()

  const userController = new UserController()

  userRouter.get("/me", userController.getUser)
  userRouter.patch("/update", userController.updateUser)
  userRouter.get("/pack", userController.openPack)
  userRouter.patch("/paste/:cardId", userController.pasteCard)

  return userRouter
}