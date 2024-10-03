import z from "zod";
import { CardRepository } from "../repository/card";
import { cardSchema } from "../schemas/card";


export class CardService {
  private cardRepository: CardRepository
  constructor() {
    this.cardRepository = new CardRepository()
  }

  async createCard(data: z.infer<typeof cardSchema>) {
    try {
      const card = await this.cardRepository.createCard(data)
      return card
    } catch (error) {
      return error
    }
  }


  async getCards(): Promise<any[] | null> {
    try {
      const cards = await this.cardRepository.getCards()
      if (!cards) {
        throw new Error("Cards not found")
      }
      return cards
    } catch (error) {
      return null
    }
  }
}