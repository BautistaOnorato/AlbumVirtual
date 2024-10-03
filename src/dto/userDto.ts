import z from "zod";
import { Team } from "../constants/teams";
import { cardSchema } from "../schemas/card";

export type UserDTO = {
  id: string;
  username: string;
  googleId: string;
  packs: number;
  lastRedeem: Date;
  album: CardListRecord;
  cards: CardListRecord;
};

export type CardListRecord = Record<Team, z.infer<typeof cardSchema>[]>;

export const userToUserDTO = (user: any): UserDTO => {
  const initializeCardListRecord = (): CardListRecord => {
    return Object.values(Team).reduce((acc, team) => {
      acc[team] = [];
      return acc;
    }, {} as CardListRecord);
  };

  const album: CardListRecord = initializeCardListRecord();
  const cards: CardListRecord = initializeCardListRecord();

  user.cards.forEach((card: z.infer<typeof cardSchema>) => {
    cards[card.team].push(card);
  });

  user.album.forEach((card: z.infer<typeof cardSchema>) => {
    album[card.team].push(card);
  });

  return {
    id: user.id,
    username: user.username,
    googleId: user.googleId,
    packs: user.packs,
    lastRedeem: user.lastRedeem,
    album,
    cards,
  };
};
