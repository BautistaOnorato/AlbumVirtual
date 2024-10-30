import { CardService } from "../service/card";
import { Validate } from "../decorators/validate";
import { Request, Response } from "express";
import { cardSchema } from "../schemas/card";
import { Team } from "../constants/teams";
import z from "zod";

export class CardController {
  private cardService: CardService
  constructor() {
    this.cardService = new CardService()
    this.createCard = this.createCard.bind(this)
    this.bulkCreate = this.bulkCreate.bind(this)
  }

  @Validate(cardSchema)
  async createCard(req: Request, res: Response) {
    try {
      const card = await this.cardService.createCard(req.body)
      return res.status(200).json(card)
    } catch (error) {
      logging.error(error)
      return res.status(500).json(error)
    }
  }

  async bulkCreate(req: Request, res: Response) {
    try {
      // logging.info("Creating ARG")
      // cards.ARG.forEach(async (card) => {
      //   await this.cardService.createCard(card)
      // })
      Object.keys(cards).forEach(async (team) => {
        cards[team as Team].forEach(async (card) => {
          await this.cardService.createCard(card)
        })
      })
      
      logging.info("Creating Ended")
      return res.status(200).json({ message: "Cards created" })
    } catch (error) {
      logging.error(error)
      return res.status(500).json(error)
    }
  }
}

const cards: Record<Team, z.infer<typeof cardSchema>[]> = {
  "ARG": [
    {
      index: 0,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/ARG/ARG0.jpg",
      team: Team.ARG
    },
    {
      index: 1,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/ARG/ARG1.jpg",
      team: Team.ARG
    },
    {
      index: 2,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/ARG/ARG2.jpg",
      team: Team.ARG
    },
    {
      index: 3,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/ARG/ARG3.jpg",
      team: Team.ARG
    },
    {
      index: 4,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/ARG/ARG4.jpg",
      team: Team.ARG
    },
    {
      index: 5,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/ARG/ARG5.jpg",
      team: Team.ARG
    },
    {
      index: 6,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/ARG/ARG6.jpg",
      team: Team.ARG
    },
    {
      index: 7,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/ARG/ARG7.jpg",
      team: Team.ARG
    },
    {
      index: 8,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/ARG/ARG8.jpg",
      team: Team.ARG
    },
    {
      index: 9,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/ARG/ARG9.jpg",
      team: Team.ARG
    },
    {
      index: 10,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/ARG/ARG10.jpg",
      team: Team.ARG
    },
    {
      index: 11,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/ARG/ARG11.jpg",
      team: Team.ARG
    },
    {
      index: 12,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/ARG/ARG12.jpg",
      team: Team.ARG
    },
    {
      index: 13,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/ARG/ARG13.jpg",
      team: Team.ARG
    },
    {
      index: 14,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/ARG/ARG14.jpg",
      team: Team.ARG
    },
    {
      index: 15,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/ARG/ARG15.jpg",
      team: Team.ARG
    },
  ],
  "ATU": [
    {
      index: 0,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/ATU/ATU0.jpg",
      team: Team.ATU
    },
    {
      index: 1,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/ATU/ATU1.jpg",
      team: Team.ATU
    },
    {
      index: 2,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/ATU/ATU2.jpg",
      team: Team.ATU
    },
    {
      index: 3,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/ATU/ATU3.jpg",
      team: Team.ATU
    },
    {
      index: 4,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/ATU/ATU4.jpg",
      team: Team.ATU
    },
    {
      index: 5,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/ATU/ATU5.jpg",
      team: Team.ATU
    },
    {
      index: 6,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/ATU/ATU6.jpg",
      team: Team.ATU
    },
    {
      index: 7,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/ATU/ATU7.jpg",
      team: Team.ATU
    },
    {
      index: 8,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/ATU/ATU8.jpg",
      team: Team.ATU
    },
    {
      index: 9,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/ATU/ATU9.jpg",
      team: Team.ATU
    },
    {
      index: 10,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/ATU/ATU10.jpg",
      team: Team.ATU
    },
    {
      index: 11,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/ATU/ATU11.jpg",
      team: Team.ATU
    },
    {
      index: 12,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/ATU/ATU12.jpg",
      team: Team.ATU
    },
    {
      index: 13,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/ATU/ATU13.jpg",
      team: Team.ATU
    },
    {
      index: 14,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/ATU/ATU14.jpg",
      team: Team.ATU
    },
    {
      index: 15,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/ATU/ATU15.jpg",
      team: Team.ATU
    },
  ],
  "BAN": [
    {
      index: 0,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BAN/BAN0.jpg",
      team: Team.BAN
    },
    {
      index: 1,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BAN/BAN1.jpg",
      team: Team.BAN
    },
    {
      index: 2,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BAN/BAN2.jpg",
      team: Team.BAN
    },
    {
      index: 3,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BAN/BAN3.jpg",
      team: Team.BAN
    },
    {
      index: 4,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BAN/BAN4.jpg",
      team: Team.BAN
    },
    {
      index: 5,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BAN/BAN5.jpg",
      team: Team.BAN
    },
    {
      index: 6,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BAN/BAN6.jpg",
      team: Team.BAN
    },
    {
      index: 7,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BAN/BAN7.jpg",
      team: Team.BAN
    },
    {
      index: 8,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BAN/BAN8.jpg",
      team: Team.BAN
    },
    {
      index: 9,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BAN/BAN9.jpg",
      team: Team.BAN
    },
    {
      index: 10,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BAN/BAN10.jpg",
      team: Team.BAN
    },
    {
      index: 11,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BAN/BAN11.jpg",
      team: Team.BAN
    },
    {
      index: 12,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BAN/BAN12.jpg",
      team: Team.BAN
    },
    {
      index: 13,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BAN/BAN13.jpg",
      team: Team.BAN
    },
    {
      index: 14,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BAN/BAN14.jpg",
      team: Team.BAN
    },
    {
      index: 15,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BAN/BAN15.jpg",
      team: Team.BAN
    },
  ],
  "BAR": [
    {
      index: 0,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BAR/BAR0.jpg",
      team: Team.BAR
    },
    {
      index: 1,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BAR/BAR1.jpg",
      team: Team.BAR
    },
    {
      index: 2,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BAR/BAR2.jpg",
      team: Team.BAR
    },
    {
      index: 3,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BAR/BAR3.jpg",
      team: Team.BAR
    },
    {
      index: 4,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BAR/BAR4.jpg",
      team: Team.BAR
    },
    {
      index: 5,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BAR/BAR5.jpg",
      team: Team.BAR
    },
    {
      index: 6,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BAR/BAR6.jpg",
      team: Team.BAR
    },
    {
      index: 7,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BAR/BAR7.jpg",
      team: Team.BAR
    },
    {
      index: 8,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BAR/BAR8.jpg",
      team: Team.BAR
    },
    {
      index: 9,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BAR/BAR9.jpg",
      team: Team.BAR
    },
    {
      index: 10,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BAR/BAR10.jpg",
      team: Team.BAR
    },
    {
      index: 11,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BAR/BAR11.jpg",
      team: Team.BAR
    },
    {
      index: 12,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BAR/BAR12.jpg",
      team: Team.BAR
    },
    {
      index: 13,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BAR/BAR13.jpg",
      team: Team.BAR
    },
    {
      index: 14,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BAR/BAR14.jpg",
      team: Team.BAR
    },
    {
      index: 15,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BAR/BAR15.jpg",
      team: Team.BAR
    },
  ],
  "BEL": [
    {
      index: 0,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BEL/BEL0.jpg",
      team: Team.BEL
    },
    {
      index: 1,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BEL/BEL1.jpg",
      team: Team.BEL
    },
    {
      index: 2,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BEL/BEL2.jpg",
      team: Team.BEL
    },
    {
      index: 3,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BEL/BEL3.jpg",
      team: Team.BEL
    },
    {
      index: 4,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BEL/BEL4.jpg",
      team: Team.BEL
    },
    {
      index: 5,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BEL/BEL5.jpg",
      team: Team.BEL
    },
    {
      index: 6,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BEL/BEL6.jpg",
      team: Team.BEL
    },
    {
      index: 7,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BEL/BEL7.jpg",
      team: Team.BEL
    },
    {
      index: 8,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BEL/BEL8.jpg",
      team: Team.BEL
    },
    {
      index: 9,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BEL/BEL9.jpg",
      team: Team.BEL
    },
    {
      index: 10,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BEL/BEL10.jpg",
      team: Team.BEL
    },
    {
      index: 11,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BEL/BEL11.jpg",
      team: Team.BEL
    },
    {
      index: 12,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BEL/BEL12.jpg",
      team: Team.BEL
    },
    {
      index: 13,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BEL/BEL13.jpg",
      team: Team.BEL
    },
    {
      index: 14,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BEL/BEL14.jpg",
      team: Team.BEL
    },
    {
      index: 15,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BEL/BEL15.jpg",
      team: Team.BEL
    },
  ],
  "BOC": [
    {
      index: 0,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BOC/BOC0.jpg",
      team: Team.BOC
    },
    {
      index: 1,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BOC/BOC1.jpg",
      team: Team.BOC
    },
    {
      index: 2,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BOC/BOC2.jpg",
      team: Team.BOC
    },
    {
      index: 3,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BOC/BOC3.jpg",
      team: Team.BOC
    },
    {
      index: 4,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BOC/BOC4.jpg",
      team: Team.BOC
    },
    {
      index: 5,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BOC/BOC5.jpg",
      team: Team.BOC
    },
    {
      index: 6,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BOC/BOC6.jpg",
      team: Team.BOC
    },
    {
      index: 7,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BOC/BOC7.jpg",
      team: Team.BOC
    },
    {
      index: 8,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BOC/BOC8.jpg",
      team: Team.BOC
    },
    {
      index: 9,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BOC/BOC9.jpg",
      team: Team.BOC
    },
    {
      index: 10,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BOC/BOC10.jpg",
      team: Team.BOC
    },
    {
      index: 11,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BOC/BOC11.jpg",
      team: Team.BOC
    },
    {
      index: 12,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BOC/BOC12.jpg",
      team: Team.BOC
    },
    {
      index: 13,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BOC/BOC13.jpg",
      team: Team.BOC
    },
    {
      index: 14,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BOC/BOC14.jpg",
      team: Team.BOC
    },
    {
      index: 15,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/BOC/BOC15.jpg",
      team: Team.BOC
    },
  ],
  "CCO": [
    {
      index: 0,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/CCO/CCO0.jpg",
      team: Team.CCO
    },
    {
      index: 1,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/CCO/CCO1.jpg",
      team: Team.CCO
    },
    {
      index: 2,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/CCO/CCO2.jpg",
      team: Team.CCO
    },
    {
      index: 3,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/CCO/CCO3.jpg",
      team: Team.CCO
    },
    {
      index: 4,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/CCO/CCO4.jpg",
      team: Team.CCO
    },
    {
      index: 5,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/CCO/CCO5.jpg",
      team: Team.CCO
    },
    {
      index: 6,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/CCO/CCO6.jpg",
      team: Team.CCO
    },
    {
      index: 7,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/CCO/CCO7.jpg",
      team: Team.CCO
    },
    {
      index: 8,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/CCO/CCO8.jpg",
      team: Team.CCO
    },
    {
      index: 9,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/CCO/CCO9.jpg",
      team: Team.CCO
    },
    {
      index: 10,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/CCO/CCO10.jpg",
      team: Team.CCO
    },
    {
      index: 11,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/CCO/CCO11.jpg",
      team: Team.CCO
    },
    {
      index: 12,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/CCO/CCO12.jpg",
      team: Team.CCO
    },
    {
      index: 13,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/CCO/CCO13.jpg",
      team: Team.CCO
    },
    {
      index: 14,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/CCO/CCO14.jpg",
      team: Team.CCO
    },
    {
      index: 15,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/CCO/CCO15.jpg",
      team: Team.CCO
    },
  ],
  "DYJ": [
    {
      index: 0,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/DYJ/DYJ0.jpg",
      team: Team.DYJ
    },
    {
      index: 1,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/DYJ/DYJ1.jpg",
      team: Team.DYJ
    },
    {
      index: 2,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/DYJ/DYJ2.jpg",
      team: Team.DYJ
    },
    {
      index: 3,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/DYJ/DYJ3.jpg",
      team: Team.DYJ
    },
    {
      index: 4,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/DYJ/DYJ4.jpg",
      team: Team.DYJ
    },
    {
      index: 5,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/DYJ/DYJ5.jpg",
      team: Team.DYJ
    },
    {
      index: 6,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/DYJ/DYJ6.jpg",
      team: Team.DYJ
    },
    {
      index: 7,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/DYJ/DYJ7.jpg",
      team: Team.DYJ
    },
    {
      index: 8,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/DYJ/DYJ8.jpg",
      team: Team.DYJ
    },
    {
      index: 9,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/DYJ/DYJ9.jpg",
      team: Team.DYJ
    },
    {
      index: 10,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/DYJ/DYJ10.jpg",
      team: Team.DYJ
    },
    {
      index: 11,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/DYJ/DYJ11.jpg",
      team: Team.DYJ
    },
    {
      index: 12,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/DYJ/DYJ12.jpg",
      team: Team.DYJ
    },
    {
      index: 13,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/DYJ/DYJ13.jpg",
      team: Team.DYJ
    },
    {
      index: 14,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/DYJ/DYJ14.jpg",
      team: Team.DYJ
    },
    {
      index: 15,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/DYJ/DYJ15.jpg",
      team: Team.DYJ
    },
  ],
  "RIE": [
    {
      index: 0,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RIE/RIE0.jpg",
      team: Team.RIE
    },
    {
      index: 1,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RIE/RIE1.jpg",
      team: Team.RIE
    },
    {
      index: 2,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RIE/RIE2.jpg",
      team: Team.RIE
    },
    {
      index: 3,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RIE/RIE3.jpg",
      team: Team.RIE
    },
    {
      index: 4,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RIE/RIE4.jpg",
      team: Team.RIE
    },
    {
      index: 5,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RIE/RIE5.jpg",
      team: Team.RIE
    },
    {
      index: 6,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RIE/RIE6.jpg",
      team: Team.RIE
    },
    {
      index: 7,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RIE/RIE7.jpg",
      team: Team.RIE
    },
    {
      index: 8,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RIE/RIE8.jpg",
      team: Team.RIE
    },
    {
      index: 9,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RIE/RIE9.jpg",
      team: Team.RIE
    },
    {
      index: 10,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RIE/RIE10.jpg",
      team: Team.RIE
    },
    {
      index: 11,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RIE/RIE11.jpg",
      team: Team.RIE
    },
    {
      index: 12,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RIE/RIE12.jpg",
      team: Team.RIE
    },
    {
      index: 13,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RIE/RIE13.jpg",
      team: Team.RIE
    },
    {
      index: 14,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RIE/RIE14.jpg",
      team: Team.RIE
    },
    {
      index: 15,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RIE/RIE15.jpg",
      team: Team.RIE
    },
  ],
  "EST": [
    {
      index: 0,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/EST/EST0.jpg",
      team: Team.EST
    },
    {
      index: 1,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/EST/EST1.jpg",
      team: Team.EST
    },
    {
      index: 2,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/EST/EST2.jpg",
      team: Team.EST
    },
    {
      index: 3,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/EST/EST3.jpg",
      team: Team.EST
    },
    {
      index: 4,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/EST/EST4.jpg",
      team: Team.EST
    },
    {
      index: 5,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/EST/EST5.jpg",
      team: Team.EST
    },
    {
      index: 6,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/EST/EST6.jpg",
      team: Team.EST
    },
    {
      index: 7,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/EST/EST7.jpg",
      team: Team.EST
    },
    {
      index: 8,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/EST/EST8.jpg",
      team: Team.EST
    },
    {
      index: 9,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/EST/EST9.jpg",
      team: Team.EST
    },
    {
      index: 10,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/EST/EST10.jpg",
      team: Team.EST
    },
    {
      index: 11,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/EST/EST11.jpg",
      team: Team.EST
    },
    {
      index: 12,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/EST/EST12.jpg",
      team: Team.EST
    },
    {
      index: 13,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/EST/EST13.jpg",
      team: Team.EST
    },
    {
      index: 14,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/EST/EST14.jpg",
      team: Team.EST
    },
    {
      index: 15,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/EST/EST15.jpg",
      team: Team.EST
    },
  ],
  "GIM": [
    {
      index: 0,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/GIM/GIM0.jpg",
      team: Team.GIM
    },
    {
      index: 1,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/GIM/GIM1.jpg",
      team: Team.GIM
    },
    {
      index: 2,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/GIM/GIM2.jpg",
      team: Team.GIM
    },
    {
      index: 3,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/GIM/GIM3.jpg",
      team: Team.GIM
    },
    {
      index: 4,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/GIM/GIM4.jpg",
      team: Team.GIM
    },
    {
      index: 5,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/GIM/GIM5.jpg",
      team: Team.GIM
    },
    {
      index: 6,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/GIM/GIM6.jpg",
      team: Team.GIM
    },
    {
      index: 7,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/GIM/GIM7.jpg",
      team: Team.GIM
    },
    {
      index: 8,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/GIM/GIM8.jpg",
      team: Team.GIM
    },
    {
      index: 9,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/GIM/GIM9.jpg",
      team: Team.GIM
    },
    {
      index: 10,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/GIM/GIM10.jpg",
      team: Team.GIM
    },
    {
      index: 11,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/GIM/GIM11.jpg",
      team: Team.GIM
    },
    {
      index: 12,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/GIM/GIM12.jpg",
      team: Team.GIM
    },
    {
      index: 13,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/GIM/GIM13.jpg",
      team: Team.GIM
    },
    {
      index: 14,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/GIM/GIM14.jpg",
      team: Team.GIM
    },
    {
      index: 15,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/GIM/GIM15.jpg",
      team: Team.GIM
    },
  ],
  "GOD": [
    {
      index: 0,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/GOD/GOD0.jpg",
      team: Team.GOD
    },
    {
      index: 1,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/GOD/GOD1.jpg",
      team: Team.GOD
    },
    {
      index: 2,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/GOD/GOD2.jpg",
      team: Team.GOD
    },
    {
      index: 3,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/GOD/GOD3.jpg",
      team: Team.GOD
    },
    {
      index: 4,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/GOD/GOD4.jpg",
      team: Team.GOD
    },
    {
      index: 5,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/GOD/GOD5.jpg",
      team: Team.GOD
    },
    {
      index: 6,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/GOD/GOD6.jpg",
      team: Team.GOD
    },
    {
      index: 7,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/GOD/GOD7.jpg",
      team: Team.GOD
    },
    {
      index: 8,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/GOD/GOD8.jpg",
      team: Team.GOD
    },
    {
      index: 9,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/GOD/GOD9.jpg",
      team: Team.GOD
    },
    {
      index: 10,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/GOD/GOD10.jpg",
      team: Team.GOD
    },
    {
      index: 11,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/GOD/GOD11.jpg",
      team: Team.GOD
    },
    {
      index: 12,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/GOD/GOD12.jpg",
      team: Team.GOD
    },
    {
      index: 13,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/GOD/GOD13.jpg",
      team: Team.GOD
    },
    {
      index: 14,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/GOD/GOD14.jpg",
      team: Team.GOD
    },
    {
      index: 15,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/GOD/GOD15.jpg",
      team: Team.GOD
    },
  ],
  "HUR": [
    {
      index: 0,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/HUR/HUR0.jpg",
      team: Team.HUR
    },
    {
      index: 1,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/HUR/HUR1.jpg",
      team: Team.HUR
    },
    {
      index: 2,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/HUR/HUR2.jpg",
      team: Team.HUR
    },
    {
      index: 3,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/HUR/HUR3.jpg",
      team: Team.HUR
    },
    {
      index: 4,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/HUR/HUR4.jpg",
      team: Team.HUR
    },
    {
      index: 5,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/HUR/HUR5.jpg",
      team: Team.HUR
    },
    {
      index: 6,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/HUR/HUR6.jpg",
      team: Team.HUR
    },
    {
      index: 7,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/HUR/HUR7.jpg",
      team: Team.HUR
    },
    {
      index: 8,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/HUR/HUR8.jpg",
      team: Team.HUR
    },
    {
      index: 9,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/HUR/HUR9.jpg",
      team: Team.HUR
    },
    {
      index: 10,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/HUR/HUR10.jpg",
      team: Team.HUR
    },
    {
      index: 11,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/HUR/HUR11.jpg",
      team: Team.HUR
    },
    {
      index: 12,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/HUR/HUR12.jpg",
      team: Team.HUR
    },
    {
      index: 13,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/HUR/HUR13.jpg",
      team: Team.HUR
    },
    {
      index: 14,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/HUR/HUR14.jpg",
      team: Team.HUR
    },
    {
      index: 15,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/HUR/HUR15.jpg",
      team: Team.HUR
    },
  ],
  "IND": [
    {
      index: 0,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/IND/IND0.jpg",
      team: Team.IND
    },
    {
      index: 1,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/IND/IND1.jpg",
      team: Team.IND
    },
    {
      index: 2,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/IND/IND2.jpg",
      team: Team.IND
    },
    {
      index: 3,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/IND/IND3.jpg",
      team: Team.IND
    },
    {
      index: 4,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/IND/IND4.jpg",
      team: Team.IND
    },
    {
      index: 5,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/IND/IND5.jpg",
      team: Team.IND
    },
    {
      index: 6,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/IND/IND6.jpg",
      team: Team.IND
    },
    {
      index: 7,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/IND/IND7.jpg",
      team: Team.IND
    },
    {
      index: 8,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/IND/IND8.jpg",
      team: Team.IND
    },
    {
      index: 9,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/IND/IND9.jpg",
      team: Team.IND
    },
    {
      index: 10,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/IND/IND10.jpg",
      team: Team.IND
    },
    {
      index: 11,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/IND/IND11.jpg",
      team: Team.IND
    },
    {
      index: 12,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/IND/IND12.jpg",
      team: Team.IND
    },
    {
      index: 13,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/IND/IND13.jpg",
      team: Team.IND
    },
    {
      index: 14,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/IND/IND14.jpg",
      team: Team.IND
    },
    {
      index: 15,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/IND/IND15.jpg",
      team: Team.IND
    },
  ],
  "IRM": [
    {
      index: 0,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/IRM/IRM0.jpg",
      team: Team.IRM
    },
    {
      index: 1,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/IRM/IRM1.jpg",
      team: Team.IRM
    },
    {
      index: 2,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/IRM/IRM2.jpg",
      team: Team.IRM
    },
    {
      index: 3,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/IRM/IRM3.jpg",
      team: Team.IRM
    },
    {
      index: 4,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/IRM/IRM4.jpg",
      team: Team.IRM
    },
    {
      index: 5,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/IRM/IRM5.jpg",
      team: Team.IRM
    },
    {
      index: 6,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/IRM/IRM6.jpg",
      team: Team.IRM
    },
    {
      index: 7,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/IRM/IRM7.jpg",
      team: Team.IRM
    },
    {
      index: 8,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/IRM/IRM8.jpg",
      team: Team.IRM
    },
    {
      index: 9,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/IRM/IRM9.jpg",
      team: Team.IRM
    },
    {
      index: 10,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/IRM/IRM10.jpg",
      team: Team.IRM
    },
    {
      index: 11,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/IRM/IRM11.jpg",
      team: Team.IRM
    },
    {
      index: 12,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/IRM/IRM12.jpg",
      team: Team.IRM
    },
    {
      index: 13,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/IRM/IRM13.jpg",
      team: Team.IRM
    },
    {
      index: 14,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/IRM/IRM14.jpg",
      team: Team.IRM
    },
    {
      index: 15,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/IRM/IRM15.jpg",
      team: Team.IRM
    },
  ],
  "INS": [
    {
      index: 0,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/INS/INS0.jpg",
      team: Team.INS
    },
    {
      index: 1,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/INS/INS1.jpg",
      team: Team.INS
    },
    {
      index: 2,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/INS/INS2.jpg",
      team: Team.INS
    },
    {
      index: 3,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/INS/INS3.jpg",
      team: Team.INS
    },
    {
      index: 4,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/INS/INS4.jpg",
      team: Team.INS
    },
    {
      index: 5,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/INS/INS5.jpg",
      team: Team.INS
    },
    {
      index: 6,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/INS/INS6.jpg",
      team: Team.INS
    },
    {
      index: 7,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/INS/INS7.jpg",
      team: Team.INS
    },
    {
      index: 8,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/INS/INS8.jpg",
      team: Team.INS
    },
    {
      index: 9,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/INS/INS9.jpg",
      team: Team.INS
    },
    {
      index: 10,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/INS/INS10.jpg",
      team: Team.INS
    },
    {
      index: 11,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/INS/INS11.jpg",
      team: Team.INS
    },
    {
      index: 12,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/INS/INS12.jpg",
      team: Team.INS
    },
    {
      index: 13,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/INS/INS13.jpg",
      team: Team.INS
    },
    {
      index: 14,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/INS/INS14.jpg",
      team: Team.INS
    },
    {
      index: 15,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/INS/INS15.jpg",
      team: Team.INS
    },
  ],
  "LAN": [
    {
      index: 0,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/LAN/LAN0.jpg",
      team: Team.LAN
    },
    {
      index: 1,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/LAN/LAN1.jpg",
      team: Team.LAN
    },
    {
      index: 2,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/LAN/LAN2.jpg",
      team: Team.LAN
    },
    {
      index: 3,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/LAN/LAN3.jpg",
      team: Team.LAN
    },
    {
      index: 4,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/LAN/LAN4.jpg",
      team: Team.LAN
    },
    {
      index: 5,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/LAN/LAN5.jpg",
      team: Team.LAN
    },
    {
      index: 6,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/LAN/LAN6.jpg",
      team: Team.LAN
    },
    {
      index: 7,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/LAN/LAN7.jpg",
      team: Team.LAN
    },
    {
      index: 8,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/LAN/LAN8.jpg",
      team: Team.LAN
    },
    {
      index: 9,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/LAN/LAN9.jpg",
      team: Team.LAN
    },
    {
      index: 10,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/LAN/LAN10.jpg",
      team: Team.LAN
    },
    {
      index: 11,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/LAN/LAN11.jpg",
      team: Team.LAN
    },
    {
      index: 12,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/LAN/LAN12.jpg",
      team: Team.LAN
    },
    {
      index: 13,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/LAN/LAN13.jpg",
      team: Team.LAN
    },
    {
      index: 14,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/LAN/LAN14.jpg",
      team: Team.LAN
    },
    {
      index: 15,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/LAN/LAN15.jpg",
      team: Team.LAN
    },
  ],
  "NOB": [
    {
      index: 0,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/NOB/NOB0.jpg",
      team: Team.NOB
    },
    {
      index: 1,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/NOB/NOB1.jpg",
      team: Team.NOB
    },
    {
      index: 2,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/NOB/NOB2.jpg",
      team: Team.NOB
    },
    {
      index: 3,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/NOB/NOB3.jpg",
      team: Team.NOB
    },
    {
      index: 4,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/NOB/NOB4.jpg",
      team: Team.NOB
    },
    {
      index: 5,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/NOB/NOB5.jpg",
      team: Team.NOB
    },
    {
      index: 6,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/NOB/NOB6.jpg",
      team: Team.NOB
    },
    {
      index: 7,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/NOB/NOB7.jpg",
      team: Team.NOB
    },
    {
      index: 8,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/NOB/NOB8.jpg",
      team: Team.NOB
    },
    {
      index: 9,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/NOB/NOB9.jpg",
      team: Team.NOB
    },
    {
      index: 10,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/NOB/NOB10.jpg",
      team: Team.NOB
    },
    {
      index: 11,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/NOB/NOB11.jpg",
      team: Team.NOB
    },
    {
      index: 12,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/NOB/NOB12.jpg",
      team: Team.NOB
    },
    {
      index: 13,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/NOB/NOB13.jpg",
      team: Team.NOB
    },
    {
      index: 14,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/NOB/NOB14.jpg",
      team: Team.NOB
    },
    {
      index: 15,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/NOB/NOB15.jpg",
      team: Team.NOB
    },
  ],
  "PLA": [
    {
      index: 0,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/PLA/PLA0.jpg",
      team: Team.PLA
    },
    {
      index: 1,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/PLA/PLA1.jpg",
      team: Team.PLA
    },
    {
      index: 2,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/PLA/PLA2.jpg",
      team: Team.PLA
    },
    {
      index: 3,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/PLA/PLA3.jpg",
      team: Team.PLA
    },
    {
      index: 4,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/PLA/PLA4.jpg",
      team: Team.PLA
    },
    {
      index: 5,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/PLA/PLA5.jpg",
      team: Team.PLA
    },
    {
      index: 6,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/PLA/PLA6.jpg",
      team: Team.PLA
    },
    {
      index: 7,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/PLA/PLA7.jpg",
      team: Team.PLA
    },
    {
      index: 8,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/PLA/PLA8.jpg",
      team: Team.PLA
    },
    {
      index: 9,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/PLA/PLA9.jpg",
      team: Team.PLA
    },
    {
      index: 10,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/PLA/PLA10.jpg",
      team: Team.PLA
    },
    {
      index: 11,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/PLA/PLA11.jpg",
      team: Team.PLA
    },
    {
      index: 12,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/PLA/PLA12.jpg",
      team: Team.PLA
    },
    {
      index: 13,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/PLA/PLA13.jpg",
      team: Team.PLA
    },
    {
      index: 14,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/PLA/PLA14.jpg",
      team: Team.PLA
    },
    {
      index: 15,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/PLA/PLA15.jpg",
      team: Team.PLA
    },
  ],
  "RAC": [
    {
      index: 0,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RAC/RAC0.jpg",
      team: Team.RAC
    },
    {
      index: 1,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RAC/RAC1.jpg",
      team: Team.RAC
    },
    {
      index: 2,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RAC/RAC2.jpg",
      team: Team.RAC
    },
    {
      index: 3,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RAC/RAC3.jpg",
      team: Team.RAC
    },
    {
      index: 4,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RAC/RAC4.jpg",
      team: Team.RAC
    },
    {
      index: 5,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RAC/RAC5.jpg",
      team: Team.RAC
    },
    {
      index: 6,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RAC/RAC6.jpg",
      team: Team.RAC
    },
    {
      index: 7,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RAC/RAC7.jpg",
      team: Team.RAC
    },
    {
      index: 8,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RAC/RAC8.jpg",
      team: Team.RAC
    },
    {
      index: 9,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RAC/RAC9.jpg",
      team: Team.RAC
    },
    {
      index: 10,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RAC/RAC10.jpg",
      team: Team.RAC
    },
    {
      index: 11,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RAC/RAC11.jpg",
      team: Team.RAC
    },
    {
      index: 12,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RAC/RAC12.jpg",
      team: Team.RAC
    },
    {
      index: 13,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RAC/RAC13.jpg",
      team: Team.RAC
    },
    {
      index: 14,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RAC/RAC14.jpg",
      team: Team.RAC
    },
    {
      index: 15,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RAC/RAC15.jpg",
      team: Team.RAC
    },
  ],
  "RIV": [
    {
      index: 0,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RIV/RIV0.jpg",
      team: Team.RIV
    },
    {
      index: 1,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RIV/RIV1.jpg",
      team: Team.RIV
    },
    {
      index: 2,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RIV/RIV2.jpg",
      team: Team.RIV
    },
    {
      index: 3,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RIV/RIV3.jpg",
      team: Team.RIV
    },
    {
      index: 4,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RIV/RIV4.jpg",
      team: Team.RIV
    },
    {
      index: 5,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RIV/RIV5.jpg",
      team: Team.RIV
    },
    {
      index: 6,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RIV/RIV6.jpg",
      team: Team.RIV
    },
    {
      index: 7,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RIV/RIV7.jpg",
      team: Team.RIV
    },
    {
      index: 8,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RIV/RIV8.jpg",
      team: Team.RIV
    },
    {
      index: 9,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RIV/RIV9.jpg",
      team: Team.RIV
    },
    {
      index: 10,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RIV/RIV10.jpg",
      team: Team.RIV
    },
    {
      index: 11,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RIV/RIV11.jpg",
      team: Team.RIV
    },
    {
      index: 12,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RIV/RIV12.jpg",
      team: Team.RIV
    },
    {
      index: 13,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RIV/RIV13.jpg",
      team: Team.RIV
    },
    {
      index: 14,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RIV/RIV14.jpg",
      team: Team.RIV
    },
    {
      index: 15,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/RIV/RIV15.jpg",
      team: Team.RIV
    },
  ],
  "CEN": [
    {
      index: 0,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/CEN/CEN0.jpg",
      team: Team.CEN
    },
    {
      index: 1,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/CEN/CEN1.jpg",
      team: Team.CEN
    },
    {
      index: 2,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/CEN/CEN2.jpg",
      team: Team.CEN
    },
    {
      index: 3,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/CEN/CEN3.jpg",
      team: Team.CEN
    },
    {
      index: 4,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/CEN/CEN4.jpg",
      team: Team.CEN
    },
    {
      index: 5,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/CEN/CEN5.jpg",
      team: Team.CEN
    },
    {
      index: 6,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/CEN/CEN6.jpg",
      team: Team.CEN
    },
    {
      index: 7,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/CEN/CEN7.jpg",
      team: Team.CEN
    },
    {
      index: 8,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/CEN/CEN8.jpg",
      team: Team.CEN
    },
    {
      index: 9,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/CEN/CEN9.jpg",
      team: Team.CEN
    },
    {
      index: 10,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/CEN/CEN10.jpg",
      team: Team.CEN
    },
    {
      index: 11,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/CEN/CEN11.jpg",
      team: Team.CEN
    },
    {
      index: 12,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/CEN/CEN12.jpg",
      team: Team.CEN
    },
    {
      index: 13,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/CEN/CEN13.jpg",
      team: Team.CEN
    },
    {
      index: 14,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/CEN/CEN14.jpg",
      team: Team.CEN
    },
    {
      index: 15,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/CEN/CEN15.jpg",
      team: Team.CEN
    },
  ],
  "SLO": [
    {
      index: 0,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/SLO/SLO0.jpg",
      team: Team.SLO
    },
    {
      index: 1,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/SLO/SLO1.jpg",
      team: Team.SLO
    },
    {
      index: 2,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/SLO/SLO2.jpg",
      team: Team.SLO
    },
    {
      index: 3,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/SLO/SLO3.jpg",
      team: Team.SLO
    },
    {
      index: 4,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/SLO/SLO4.jpg",
      team: Team.SLO
    },
    {
      index: 5,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/SLO/SLO5.jpg",
      team: Team.SLO
    },
    {
      index: 6,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/SLO/SLO6.jpg",
      team: Team.SLO
    },
    {
      index: 7,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/SLO/SLO7.jpg",
      team: Team.SLO
    },
    {
      index: 8,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/SLO/SLO8.jpg",
      team: Team.SLO
    },
    {
      index: 9,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/SLO/SLO9.jpg",
      team: Team.SLO
    },
    {
      index: 10,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/SLO/SLO10.jpg",
      team: Team.SLO
    },
    {
      index: 11,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/SLO/SLO11.jpg",
      team: Team.SLO
    },
    {
      index: 12,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/SLO/SLO12.jpg",
      team: Team.SLO
    },
    {
      index: 13,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/SLO/SLO13.jpg",
      team: Team.SLO
    },
    {
      index: 14,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/SLO/SLO14.jpg",
      team: Team.SLO
    },
    {
      index: 15,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/SLO/SLO15.jpg",
      team: Team.SLO
    },
  ],
  "SAR": [
    {
      index: 0,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/SAR/SAR0.jpg",
      team: Team.SAR
    },
    {
      index: 1,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/SAR/SAR1.jpg",
      team: Team.SAR
    },
    {
      index: 2,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/SAR/SAR2.jpg",
      team: Team.SAR
    },
    {
      index: 3,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/SAR/SAR3.jpg",
      team: Team.SAR
    },
    {
      index: 4,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/SAR/SAR4.jpg",
      team: Team.SAR
    },
    {
      index: 5,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/SAR/SAR5.jpg",
      team: Team.SAR
    },
    {
      index: 6,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/SAR/SAR6.jpg",
      team: Team.SAR
    },
    {
      index: 7,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/SAR/SAR7.jpg",
      team: Team.SAR
    },
    {
      index: 8,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/SAR/SAR8.jpg",
      team: Team.SAR
    },
    {
      index: 9,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/SAR/SAR9.jpg",
      team: Team.SAR
    },
    {
      index: 10,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/SAR/SAR10.jpg",
      team: Team.SAR
    },
    {
      index: 11,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/SAR/SAR11.jpg",
      team: Team.SAR
    },
    {
      index: 12,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/SAR/SAR12.jpg",
      team: Team.SAR
    },
    {
      index: 13,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/SAR/SAR13.jpg",
      team: Team.SAR
    },
    {
      index: 14,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/SAR/SAR14.jpg",
      team: Team.SAR
    },
    {
      index: 15,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/SAR/SAR15.jpg",
      team: Team.SAR
    },
  ],
  "TIG": [
    {
      index: 0,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/TIG/TIG0.jpg",
      team: Team.TIG
    },
    {
      index: 1,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/TIG/TIG1.jpg",
      team: Team.TIG
    },
    {
      index: 2,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/TIG/TIG2.jpg",
      team: Team.TIG
    },
    {
      index: 3,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/TIG/TIG3.jpg",
      team: Team.TIG
    },
    {
      index: 4,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/TIG/TIG4.jpg",
      team: Team.TIG
    },
    {
      index: 5,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/TIG/TIG5.jpg",
      team: Team.TIG
    },
    {
      index: 6,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/TIG/TIG6.jpg",
      team: Team.TIG
    },
    {
      index: 7,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/TIG/TIG7.jpg",
      team: Team.TIG
    },
    {
      index: 8,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/TIG/TIG8.jpg",
      team: Team.TIG
    },
    {
      index: 9,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/TIG/TIG9.jpg",
      team: Team.TIG
    },
    {
      index: 10,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/TIG/TIG10.jpg",
      team: Team.TIG
    },
    {
      index: 11,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/TIG/TIG11.jpg",
      team: Team.TIG
    },
    {
      index: 12,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/TIG/TIG12.jpg",
      team: Team.TIG
    },
    {
      index: 13,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/TIG/TIG13.jpg",
      team: Team.TIG
    },
    {
      index: 14,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/TIG/TIG14.jpg",
      team: Team.TIG
    },
    {
      index: 15,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/TIG/TIG15.jpg",
      team: Team.TIG
    },
  ],
  "TAL": [
    {
      index: 0,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/TAL/TAL0.jpg",
      team: Team.TAL
    },
    {
      index: 1,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/TAL/TAL1.jpg",
      team: Team.TAL
    },
    {
      index: 2,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/TAL/TAL2.jpg",
      team: Team.TAL
    },
    {
      index: 3,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/TAL/TAL3.jpg",
      team: Team.TAL
    },
    {
      index: 4,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/TAL/TAL4.jpg",
      team: Team.TAL
    },
    {
      index: 5,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/TAL/TAL5.jpg",
      team: Team.TAL
    },
    {
      index: 6,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/TAL/TAL6.jpg",
      team: Team.TAL
    },
    {
      index: 7,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/TAL/TAL7.jpg",
      team: Team.TAL
    },
    {
      index: 8,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/TAL/TAL8.jpg",
      team: Team.TAL
    },
    {
      index: 9,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/TAL/TAL9.jpg",
      team: Team.TAL
    },
    {
      index: 10,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/TAL/TAL10.jpg",
      team: Team.TAL
    },
    {
      index: 11,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/TAL/TAL11.jpg",
      team: Team.TAL
    },
    {
      index: 12,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/TAL/TAL12.jpg",
      team: Team.TAL
    },
    {
      index: 13,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/TAL/TAL13.jpg",
      team: Team.TAL
    },
    {
      index: 14,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/TAL/TAL14.jpg",
      team: Team.TAL
    },
    {
      index: 15,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/TAL/TAL15.jpg",
      team: Team.TAL
    },
  ],
  "UNI": [
    {
      index: 0,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/UNI/UNI0.jpg",
      team: Team.UNI
    },
    {
      index: 1,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/UNI/UNI1.jpg",
      team: Team.UNI
    },
    {
      index: 2,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/UNI/UNI2.jpg",
      team: Team.UNI
    },
    {
      index: 3,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/UNI/UNI3.jpg",
      team: Team.UNI
    },
    {
      index: 4,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/UNI/UNI4.jpg",
      team: Team.UNI
    },
    {
      index: 5,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/UNI/UNI5.jpg",
      team: Team.UNI
    },
    {
      index: 6,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/UNI/UNI6.jpg",
      team: Team.UNI
    },
    {
      index: 7,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/UNI/UNI7.jpg",
      team: Team.UNI
    },
    {
      index: 8,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/UNI/UNI8.jpg",
      team: Team.UNI
    },
    {
      index: 9,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/UNI/UNI9.jpg",
      team: Team.UNI
    },
    {
      index: 10,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/UNI/UNI10.jpg",
      team: Team.UNI
    },
    {
      index: 11,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/UNI/UNI11.jpg",
      team: Team.UNI
    },
    {
      index: 12,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/UNI/UNI12.jpg",
      team: Team.UNI
    },
    {
      index: 13,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/UNI/UNI13.jpg",
      team: Team.UNI
    },
    {
      index: 14,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/UNI/UNI14.jpg",
      team: Team.UNI
    },
    {
      index: 15,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/UNI/UNI15.jpg",
      team: Team.UNI
    },
  ],
  "VEL": [
    {
      index: 0,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/VEL/VEL0.jpg",
      team: Team.VEL
    },
    {
      index: 1,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/VEL/VEL1.jpg",
      team: Team.VEL
    },
    {
      index: 2,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/VEL/VEL2.jpg",
      team: Team.VEL
    },
    {
      index: 3,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/VEL/VEL3.jpg",
      team: Team.VEL
    },
    {
      index: 4,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/VEL/VEL4.jpg",
      team: Team.VEL
    },
    {
      index: 5,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/VEL/VEL5.jpg",
      team: Team.VEL
    },
    {
      index: 6,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/VEL/VEL6.jpg",
      team: Team.VEL
    },
    {
      index: 7,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/VEL/VEL7.jpg",
      team: Team.VEL
    },
    {
      index: 8,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/VEL/VEL8.jpg",
      team: Team.VEL
    },
    {
      index: 9,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/VEL/VEL9.jpg",
      team: Team.VEL
    },
    {
      index: 10,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/VEL/VEL10.jpg",
      team: Team.VEL
    },
    {
      index: 11,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/VEL/VEL11.jpg",
      team: Team.VEL
    },
    {
      index: 12,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/VEL/VEL12.jpg",
      team: Team.VEL
    },
    {
      index: 13,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/VEL/VEL13.jpg",
      team: Team.VEL
    },
    {
      index: 14,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/VEL/VEL14.jpg",
      team: Team.VEL
    },
    {
      index: 15,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/LPF/VEL/VEL15.jpg",
      team: Team.VEL
    },
  ],
}