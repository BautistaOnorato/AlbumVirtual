import { NextFunction, Request, Response } from "express";

export const loggingHandler = (req: Request, res: Response, next: NextFunction) => {
  logging.log(`Incoming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
  res.on('finish', () => {
    logging.log(`Outgoing - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`);
  })
  next();
}