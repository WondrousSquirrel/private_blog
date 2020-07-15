import dotenv from "dotenv";

import { environment } from "../environment";
import { name, version } from "../../package.json";


dotenv.config();

/*
 * App config
 * @property {string} name - api имя
 * @property {string} version - api версия
 * @property {string} environment - окружение
 */

const appConfig = {
  name,
  version,
  environment: process.env.NODE_ENV || environment.development
};

export default appConfig;
