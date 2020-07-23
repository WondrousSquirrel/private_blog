// Главный файл api

import app from "./app";
import dotenv from "dotenv";
import path from "path";

import { appConfig } from "./config";
import logger from "./services/logger";
import { environment } from "./config/environment";

dotenv.config();

const PORT = process.env.PORT || 5001;

if (appConfig.environment === environment.production) {
  app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname + "/dist/index.html"));
  });
}

app.listen(PORT, () => {
  logger.debug(
    `name: ${appConfig.name}, version: ${appConfig.version}, environment: ${appConfig.environment}\nhas started: http://localhost:${PORT}`
  );
});
