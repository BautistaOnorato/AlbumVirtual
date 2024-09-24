import z from "zod";
import { UserRepository } from "../repository/user";
import { partialUserSchema } from "../schemas/user";
import { CardService } from "./card";

export class UserService {
  private userRepository: UserRepository
  private cardService: CardService

  constructor() {
    this.userRepository = new UserRepository()
    this.cardService = new CardService()
  }

  async getUser(id: string) {
    try {
      const user = await this.userRepository.getUser(id)
      return user
    } catch (error) {
      return error
    }
  }

  async updateUser(data: z.infer<typeof partialUserSchema>, id: string) {
    try {
      const user = await this.userRepository.updateUser(data, id)
      return user
    } catch (error) {
      return error
    }
  }

  async openPack(user: any) {
    try {
      const cards = await this.cardService.getCards()
      if (!cards) {
        throw new Error("Cards not found")
      }
      user.cards = [...user.cards, ...cards]
      user.packs = user.packs - 1
      await this.userRepository.updateUser(user, user.id)
      return cards
    } catch (error) {
      return error
    }
  }

  async pasteCard(user: any, cardId: string) {
    try {
      const card = user.cards.find((c: any) => c.id === cardId)
      if (!card) {
        return null
      }
      user.cards = user.cards.filter((c: any) => c.id !== cardId)
      user.album.push(card)
      await this.userRepository.updateUser(user, user.id)
      return card
    } catch (error) {
      logging.error(error)
      return error
    }
  }
}