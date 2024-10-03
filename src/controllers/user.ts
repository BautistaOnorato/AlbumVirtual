import { Validate } from "../decorators/validate";
import { Request, Response } from "express";
import { UserService } from "../service/user";
import { partialUserSchema } from "../schemas/user";
import { Authenticated } from "../decorators/authenticated";
import { userToUserDTO } from "../dto/userDto";

export class UserController {
  private userService: UserService
  constructor() {
    this.userService = new UserService()
    this.updateUser = this.updateUser.bind(this)
    this.getUser = this.getUser.bind(this)
    this.openPack = this.openPack.bind(this)
    this.updateLastRedeem = this.updateLastRedeem.bind(this)
    this.pasteCard = this.pasteCard.bind(this)
  }

  @Authenticated()
  async getUser(req: Request, res: Response) {
    try {
      if (!req.user) {
        throw new Error("User not found")
      }

      const user = userToUserDTO(req.user)
      return res.status(200).json(user)
    } catch (error) {
      logging.error(error)
      return res.status(500).json(error)
    }
  }

  @Authenticated()
  async getCards(req: Request, res: Response) {
    try {
      if (!req.user) {
        throw new Error("User not found")
      }
      const user: any = req.user
      return res.status(200).json(user.cards)
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
      if (cards instanceof Error) {
        throw cards
      }
      return res.status(200).json(cards)
    } catch (error: any) {
      logging.error(error)
      return res.status(500).json({ error: error.message })
    }
  }

  @Authenticated()
  async updateLastRedeem(req: Request, res: Response) {
    try {
      const user = await this.userService.updateLastRedeem(req.user)
      return res.status(200).json(user)
    } catch (error) {
      logging.error(error)
      return res.status(500).json(error)
    }
  }

  @Authenticated()
  async pasteCard(req: Request, res: Response) {
    try {
      const card = await this.userService.pasteCard(req.user, req.params.cardId)
      if (card instanceof Error) {
        throw card
      }
      return res.status(200).json(card)
    } catch (error: any) {
      logging.error(error)
      return res.status(500).json({ error: error.message })
    }
  }
}