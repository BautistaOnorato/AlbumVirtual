import { Router } from "express"
import { CardController } from "../controllers/card"

export const createCardRouter = () => {
  const cardRouter = Router()

  const cardController = new CardController()

  cardRouter.post("/create", cardController.createCard)
  cardRouter.post("/bulk", cardController.bulkCreate)

  return cardRouter
}