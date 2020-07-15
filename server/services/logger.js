import winston from "winston";

const { loggerConfig } = require("../config");

const logger = winston.createLogger({
  transports: [
    new winston.transports.File(loggerConfig.file),
    new winston.transports.Console(loggerConfig.console),
  ],
  exitOnError: false, // не заканчивать работу при обработаных исключениях
  handleExceptions: true,
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple(),
    winston.format.splat(),
  ),
});

// Morgan только консольный логгер, необходимо вручную записывать файл
logger.stream = {
  write: function (message) {
    logger.info(message);
  },
};

export default logger