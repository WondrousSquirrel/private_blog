import dotenv from "dotenv";
import appConfig from "./appConfig";

dotenv.config();

/**
 * App config
 * @property {string} user - имя аккаунта пользователя
 * @property {string} host - где размещена база
 * @property {string} database - имя базы данных
 * @property {string} password - пароль от аккаунта
 * @property {integer} port - порт сервера
 */

let postgresConfig = {}


if (appConfig.environment === 'production') {
  postgresConfig = {
    user: process.env.RDS_USERNAME,
    host: process.env.RDS_HOSTNAME,
    database: process.env.RDS_DB_NAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
  }
} else {
  postgresConfig = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  }
}

export default postgresConfig;