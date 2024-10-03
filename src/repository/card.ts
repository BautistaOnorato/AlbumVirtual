import z from "zod";
import { Card } from "../models/card";
import { cardSchema } from "../schemas/card";

export class CardRepository {
  async createCard(data: z.infer<typeof cardSchema>) {
    try {
      const card = await Card.create({
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
      const cards = await Card.aggregate([{ $sample: { size: 5} }])
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
