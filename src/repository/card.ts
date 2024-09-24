import z from "zod";
import { Card } from "../models/card";
import { playerSchema } from "../schemas/player";
import { CardType } from "../constants/cardType";
import { stadiumSchema } from "../schemas/stadium";
import { specialCardSchema } from "../schemas/specialCard";
import { badgeSchema } from "../schemas/badge";
import { squadSchema } from "../schemas/squad";

export class CardRepository {
  async createPlayer(data: z.infer<typeof playerSchema>) {
    try {
      const card = await Card.create({
        type: CardType.Player,
        ...data,
      });
      return card;
    } catch (error) {
      logging.error(error);
      return error;
    }
  }

  async createStadium(data: z.infer<typeof stadiumSchema>) {
    try {
      const card = await Card.create({
        type: CardType.Stadium,
        ...data,
      });
      return card;
    } catch (error) {
      logging.error(error);
      return error;
    }
  }

  async createSpecialCard(data: z.infer<typeof specialCardSchema>) {
    try {
      const card = await Card.create({
        type: CardType.SpecialCard,
        ...data,
      });
      return card;
    } catch (error) {
      logging.error(error);
      return error;
    }
  }

  async createBadge(data: z.infer<typeof badgeSchema>) {
    try {
      const card = await Card.create({
        type: CardType.Badge,
        ...data,
      });
      return card;
    } catch (error) {
      logging.error(error);
      return error;
    }
  }

  async createSquad(data: z.infer<typeof squadSchema>) {
    try {
      const card = await Card.create({
        type: CardType.Squad,
        ...data,
      });
      return card;
    } catch (error) {
      logging.error(error);
      return error;
    }
  }

  async getCards(): Promise<any[] | null> {
    try {
      const indexes = getRandomNumbers(1, 6, 5)
      const cards = await Card.find({ index: { $in: indexes } })
      return cards
    } catch (error) {
      logging.error(error);
      return null;
    }
  }
}


const getRandomNumbers = (start: number = 1, end: number = 100, quantity: number = 5) => {
  const result: number[] = []
  while (result.length < quantity) {
    const random = Math.floor(Math.random() * (end - start + 1)) + start
    if (!result.includes(random)) {
      result.push(random)
    }
  }
  return result
}
