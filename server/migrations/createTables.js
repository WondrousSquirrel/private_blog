import pool from "../services/postgres";
import logger from "../services/logger";

pool.on('connect', () => {
  logger.info('connected to database');
})

const createUserTable = () => {
  const userCreateQuery = `CREATE TABLE IF NOT EXISTS users 
  (id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(200) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL,
  is_admin BOOLEAN DEFAULT FALSE,
  have_access BOOLEAN DEFAULT FALSE,
  created_on DATE NOT NULL)`;

  pool.query(userCreateQuery)
    .then(response => {
      logger.debug(response)
      pool.end();
    })
    .catch(error => {
      logger.info(error);
      pool.end();
    })
}

const createTables = () => {
  createUserTable();
}

/*
const dropUserTable = () => {
  const usersDropQuery = 'DROP TABLE IF EXISTS users';
  pool.query(usersDropQuery)
    .then(response => {
      logger.debug(response);
      pool.end();
    })
    .catch(error => {
      logger.info(error);
      pool.end();
    });
};
*/

createTables();