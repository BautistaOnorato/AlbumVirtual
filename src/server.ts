import http from "http";
import express from "express";
import "./config/logging";
import "reflect-metadata";
import cookieParser from "cookie-parser";
import { loggingHandler } from "./middleware/loggingHandler";
import { corsHandler } from "./middleware/corsHandler";
import { routeNotFound } from "./middleware/routeNotFound";
import { mongo, PORT, SERVER_HOSTNAME } from "./config/config";
import mongoose from "mongoose";
import { createRoutes } from "./routes/router";
import session from "express-session"
import MongoStore from "connect-mongo";
import passport from "passport";
import "./strategies/google-strategy"

export const app = express();
export let httpServer: ReturnType<typeof http.createServer>;

export const Main = async () => {
  logging.info("--------------------------------------------------");
  logging.info("Initializing API...");
  logging.info("--------------------------------------------------");
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());
  
  logging.info("--------------------------------------------------");
  logging.info("Connecting to Mongo...");
  logging.info("--------------------------------------------------");
  try {
    const connection = await mongoose.connect(mongo.MONGO_URI, mongo.MONGO_OPTIONS)
    logging.info("Connected to Mongo: ", connection.version);
  } catch (error) {
    logging.info("Unable to Connect to Mongo");
    logging.error(error)
  }

  logging.info("--------------------------------------------------");
  logging.info("Logging & Configuration");
  logging.info("--------------------------------------------------");
  app.use(loggingHandler);
  app.use(corsHandler);

  logging.info("--------------------------------------------------");
  logging.info("Security Configuration");
  logging.info("--------------------------------------------------");
  app.use(
    session({
      secret: "my secret",
      saveUninitialized: true,
      resave: false,
      cookie: {
        maxAge: 60000 * 60 * 24 * 14 * 3, 
      },
      store: MongoStore.create({
        client: mongoose.connection.getClient(),
      })
    })
  )
  app.use(passport.initialize())
  app.use(passport.session())

  logging.info("--------------------------------------------------");
  logging.info("Define Controller Routing");
  logging.info("--------------------------------------------------");
  createRoutes(app)

  logging.info("--------------------------------------------------");
  logging.info("Define Routing Error");
  logging.info("--------------------------------------------------");
  app.use(routeNotFound);

  logging.info("--------------------------------------------------");
  logging.info("Start Server");
  logging.info("--------------------------------------------------");
  httpServer = http.createServer(app);

  httpServer.listen(PORT, () => {
    logging.info("--------------------------------------------------");
    logging.info(`Server Started: ${SERVER_HOSTNAME}:${PORT}`);
    logging.info("--------------------------------------------------");
  });
};

export const Shutdown = (callback: any) =>
  httpServer && httpServer.close(callback);

Main();
