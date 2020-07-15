// Опции для файла и консоли
const loggerConfig = {
  file: {
    level: 'info',
    filename: `./logs/api.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

export default loggerConfig;
