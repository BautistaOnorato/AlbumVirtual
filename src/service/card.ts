import z from "zod";
import { CardRepository } from "../repository/card";
import { playerSchema } from "../schemas/player";
import { squadSchema } from "../schemas/squad";
import { badgeSchema } from "../schemas/badge";
import { specialCardSchema } from "../schemas/specialCard";
import { stadiumSchema } from "../schemas/stadium";


export class CardService {
  private cardRepository: CardRepository
  constructor() {
    this.cardRepository = new CardRepository()
  }

  async createPlayer(data: z.infer<typeof playerSchema>) {
    try {
      const card = await this.cardRepository.createPlayer(data)
      return card
    } catch (error) {
      return error
    }
  }

  async createStadium(data: z.infer<typeof stadiumSchema>) {
    try {
      const card = await this.cardRepository.createStadium(data)
      return card
    } catch (error) {
      return error
    }
  }

  async createSpecialCard(data: z.infer<typeof specialCardSchema>) {
    try {
      const card = await this.cardRepository.createSpecialCard(data)
      return card
    } catch (error) {
      return error
    }
  }

  async createBadge(data: z.infer<typeof badgeSchema>) {
    try {
      const card = await this.cardRepository.createBadge(data)
      return card
    } catch (error) {
      return error
    }
  }

  async createSquad(data: z.infer<typeof squadSchema>) {
    try {
      const card = await this.cardRepository.createSquad(data)
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