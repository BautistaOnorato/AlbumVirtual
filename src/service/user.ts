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
      if (user.packs < 1) {
        return new Error("No packs available")
      }
      const cards = await this.cardService.getCards()
      if (!cards) {
        return new Error("Cards not found")
      }
      user.cards = [...user.cards, ...cards]
      user.packs = user.packs - 1
      await this.userRepository.updateUser(user, user.id)
      return cards
    } catch (error) {
      logging.error(error)
      return error
    }
  }

  async updateLastRedeem(user: any) {
    try {
      user.lastRedeem = new Date()
      user.packs += 10
      await this.userRepository.updateUser(user, user.id)
      return user
    } catch (error) {
      logging.error(error)
      return error
    }
  }

  async pasteCard(user: any, cardId: string) {
    try {
      const card = user.cards.findIndex((c: any) => c.id === cardId)
      if (card < 0) {
        return new Error("Card not found")
      }
      if (user.album.findIndex((c: any) => c.id === cardId) >= 0) {
        return new Error("Card already in album")
      }
      const result = user.cards[card]
      user.album.push(result)
      user.cards.splice(card, 1)
      await this.userRepository.updateUser(user, user.id)
      return result
    } catch (error) {
      logging.error(error)
      return error
    }
  }

  async getCards(user: any) {
    try {
      const albumCards = user.album
      const newCards = user.cards.filter((c: any) => albumCards.findIndex((ac: any) => ac.id === c.id) < 0)
      return {
        album: albumCards,
        new: newCards
      }
    } catch (error) {
      logging.error(error)
      return error
    }
  }
}