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
      logging.info("Creating ARG")
      cards.ARG.forEach(async (card) => {
        await this.cardService.createCard(card)
      })
      logging.info("Creating ATU")
      cards.ATU.forEach(async (card) => {
        await this.cardService.createCard(card)
      })
      logging.info("Creating BAN")
      cards.BAN.forEach(async (card) => {
        await this.cardService.createCard(card)
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
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/ARG/ARG0.jpg",
      team: Team.ARG
    },
    {
      index: 1,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/ARG/ARG1.jpg",
      team: Team.ARG
    },
    {
      index: 2,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/ARG/ARG2.jpg",
      team: Team.ARG
    },
    {
      index: 3,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/ARG/ARG3.jpg",
      team: Team.ARG
    },
    {
      index: 4,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/ARG/ARG4.jpg",
      team: Team.ARG
    },
    {
      index: 5,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/ARG/ARG5.jpg",
      team: Team.ARG
    },
    {
      index: 6,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/ARG/ARG6.jpg",
      team: Team.ARG
    },
    {
      index: 7,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/ARG/ARG7.jpg",
      team: Team.ARG
    },
    {
      index: 8,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/ARG/ARG8.jpg",
      team: Team.ARG
    },
    {
      index: 9,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/ARG/ARG9.jpg",
      team: Team.ARG
    },
    {
      index: 10,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/ARG/ARG10.jpg",
      team: Team.ARG
    },
    {
      index: 11,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/ARG/ARG11.jpg",
      team: Team.ARG
    },
    {
      index: 12,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/ARG/ARG12.jpg",
      team: Team.ARG
    },
    {
      index: 13,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/ARG/ARG13.jpg",
      team: Team.ARG
    },
    {
      index: 14,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/ARG/ARG14.jpg",
      team: Team.ARG
    },
    {
      index: 15,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/ARG/ARG15.jpg",
      team: Team.ARG
    },
  ],
  "ATU": [
    {
      index: 0,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/ATU/ATU0.jpg",
      team: Team.ATU
    },
    {
      index: 1,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/ATU/ATU1.jpg",
      team: Team.ATU
    },
    {
      index: 2,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/ATU/ATU2.jpg",
      team: Team.ATU
    },
    {
      index: 3,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/ATU/ATU3.jpg",
      team: Team.ATU
    },
    {
      index: 4,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/ATU/ATU4.jpg",
      team: Team.ATU
    },
    {
      index: 5,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/ATU/ATU5.jpg",
      team: Team.ATU
    },
    {
      index: 6,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/ATU/ATU6.jpg",
      team: Team.ATU
    },
    {
      index: 7,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/ATU/ATU7.jpg",
      team: Team.ATU
    },
    {
      index: 8,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/ATU/ATU8.jpg",
      team: Team.ATU
    },
    {
      index: 9,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/ATU/ATU9.jpg",
      team: Team.ATU
    },
    {
      index: 10,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/ATU/ATU10.jpg",
      team: Team.ATU
    },
    {
      index: 11,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/ATU/ATU11.jpg",
      team: Team.ATU
    },
    {
      index: 12,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/ATU/ATU12.jpg",
      team: Team.ATU
    },
    {
      index: 13,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/ATU/ATU13.jpg",
      team: Team.ATU
    },
    {
      index: 14,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/ATU/ATU14.jpg",
      team: Team.ATU
    },
    {
      index: 15,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/ATU/ATU15.jpg",
      team: Team.ATU
    },
  ],
  "BAN": [
    {
      index: 0,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/BAN/BAN0.jpg",
      team: Team.BAN
    },
    {
      index: 1,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/BAN/BAN1.jpg",
      team: Team.BAN
    },
    {
      index: 2,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/BAN/BAN2.jpg",
      team: Team.BAN
    },
    {
      index: 3,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/BAN/BAN3.jpg",
      team: Team.BAN
    },
    {
      index: 4,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/BAN/BAN4.jpg",
      team: Team.BAN
    },
    {
      index: 5,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/BAN/BAN5.jpg",
      team: Team.BAN
    },
    {
      index: 6,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/BAN/BAN6.jpg",
      team: Team.BAN
    },
    {
      index: 7,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/BAN/BAN7.jpg",
      team: Team.BAN
    },
    {
      index: 8,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/BAN/BAN8.jpg",
      team: Team.BAN
    },
    {
      index: 9,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/BAN/BAN9.jpg",
      team: Team.BAN
    },
    {
      index: 10,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/BAN/BAN10.jpg",
      team: Team.BAN
    },
    {
      index: 11,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/BAN/BAN11.jpg",
      team: Team.BAN
    },
    {
      index: 12,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/BAN/BAN12.jpg",
      team: Team.BAN
    },
    {
      index: 13,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/BAN/BAN13.jpg",
      team: Team.BAN
    },
    {
      index: 14,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/BAN/BAN14.jpg",
      team: Team.BAN
    },
    {
      index: 15,
      photoUrl: "https://lpf-album-virtual.s3.sa-east-1.amazonaws.com/BAN/BAN15.jpg",
      team: Team.BAN
    },
  ],
  "BAR": [],
  "BOC": [],
  "CCO": [],
  "DYJ": [],
  "RIE": [],
  "EST": [],
  "GIM": [],
  "GOD": [],
  "HUR": [],
  "IND": [],
  "IRM": [],
  "INS": [],
  "LAN": [],
  "NOB": [],
  "PLA": [],
  "RAC": [],
  "RIV": [],
  "CEN": [],
  "SLO": [],
  "SAR": [],
  "TIG": [],
  "TAL": [],
  "UNI": [],
  "VEL": [],
}