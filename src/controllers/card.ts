import { playerSchema } from "../schemas/player";
import { CardService } from "../service/card";
import { Validate } from "../decorators/validate";
import { Request, Response } from "express";
import { specialCardSchema } from "../schemas/specialCard";
import { stadiumSchema } from "../schemas/stadium";
import { badgeSchema } from "../schemas/badge";
import { squadSchema } from "../schemas/squad";

export class CardController {
  private cardService: CardService
  constructor() {
    this.cardService = new CardService()
    this.createPlayer = this.createPlayer.bind(this)
    this.createSpecialCard = this.createSpecialCard.bind(this)
    this.createStadium = this.createStadium.bind(this)
    this.createBadge = this.createBadge.bind(this)
    this.createSquad = this.createSquad.bind(this)
  }

  @Validate(playerSchema)
  async createPlayer(req: Request, res: Response) {
    try {
      const card = await this.cardService.createPlayer(req.body)
      return res.status(200).json(card)
    } catch (error) {
      logging.error(error)
      return res.status(500).json(error)
    }
  }

  @Validate(specialCardSchema)
  async createSpecialCard(req: Request, res: Response) {
    try {
      const card = await this.cardService.createSpecialCard(req.body)
      return res.status(200).json(card)
    } catch (error) {
      logging.error(error)
      return res.status(500).json(error)
    }
  }

  @Validate(stadiumSchema)
  async createStadium(req: Request, res: Response) {
    try {
      const card = await this.cardService.createStadium(req.body)
      return res.status(200).json(card)
    } catch (error) {
      logging.error(error)
      return res.status(500).json(error)
    }
  }

  @Validate(badgeSchema)
  async createBadge(req: Request, res: Response) {
    try {
      const card = await this.cardService.createBadge(req.body)
      return res.status(200).json(card)
    } catch (error) {
      logging.error(error)
      return res.status(500).json(error)
    }
  }

  @Validate(squadSchema)
  async createSquad(req: Request, res: Response) {
    try {
      const card = await this.cardService.createSquad(req.body)
      return res.status(200).json(card)
    } catch (error) {
      logging.error(error)
      return res.status(500).json(error)
    }
  }
}