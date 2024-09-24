import { Validate } from "../decorators/validate";
import { Request, Response } from "express";
import { UserService } from "../service/user";
import { partialUserSchema } from "../schemas/user";
import { Authenticated } from "../decorators/authenticated";

export class UserController {
  private userService: UserService
  constructor() {
    this.userService = new UserService()
    this.updateUser = this.updateUser.bind(this)
    this.getUser = this.getUser.bind(this)
    this.openPack = this.openPack.bind(this)
    this.pasteCard = this.pasteCard.bind(this)
  }

  @Authenticated()
  async getUser(req: Request, res: Response) {
    try {
      return res.status(200).json({
        // @ts-ignore
        user: req.user,
        session: req.headers,
      })
    } catch (error) {
      logging.error(error)
      return res.status(500).json(error)
    }
  }

  @Authenticated()
  @Validate(partialUserSchema)
  async updateUser(req: Request, res: Response) {
    try {
      // @ts-ignore
      const id: string = req.user._id
      const card = await this.userService.updateUser(req.body, id)
      return res.status(200).json(card)
    } catch (error) {
      logging.error(error)
      return res.status(500).json(error)
    }
  }

  @Authenticated()
  async openPack(req: Request, res: Response) {
    try {
      const cards = await this.userService.openPack(req.user)
      if (!cards) {
        return res.status(404).json({ error: "Cards not found" })
      }
      return res.status(200).json(cards)
    } catch (error) {
      logging.error(error)
      return res.status(500).json(error)
    }
  }

  @Authenticated()
  async pasteCard(req: Request, res: Response) {
    try {
      const card = await this.userService.pasteCard(req.user, req.params.cardId)
      if (!card) {
        return res.status(404).json({ error: "Card not found" })
      }
      return res.status(200).json(card)
    } catch (error) {
      logging.error(error)
      return res.status(500).json(error)
    }
  }
}