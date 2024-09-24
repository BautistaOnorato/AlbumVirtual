import { Router } from "express"
import { CardController } from "../controllers/card"

export const createCardRouter = () => {
  const cardRouter = Router()

  const cardController = new CardController()

  cardRouter.post("/player", cardController.createPlayer)
  cardRouter.post("/specialcard", cardController.createSpecialCard)
  cardRouter.post("/stadium", cardController.createStadium)
  cardRouter.post("/badge", cardController.createBadge)
  cardRouter.post("/squad", cardController.createSquad)

  return cardRouter
}