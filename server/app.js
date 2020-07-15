import express from "express";
import path from "path";
import dotenv from "dotenv";
import morgan from "morgan";

import router from "./routes";
import { appConfig } from "./config";
import logger from "./services/logger";
import { environment } from "./config/environment";

dotenv.config();
const app = express();

if (appConfig.environment === environment.production) {
  app.use(express.static(path.join(__dirname + "/dist")));
}
app.use(morgan("combined", { stream: logger.stream }));
app.use("/api", router);

export default app;
