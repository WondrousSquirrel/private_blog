import bcrypt from 'bcrypt';
import moment from 'moment';

import pool from '../services/postgres';
import logger from '../services/logger';
import adminData from '../services/createAdmin';
import { get_token } from '../middleware/auth';

const userList = (request, response) => {
  const order = request.params.order || 'DESC';
  pool
  .query(`SELECT * FROM users ORDER BY id ${order}`)
  .then(res => {
    const result = res.rows;
    return response.send(result);
  })
  .catch(error => {
    logger.info(error.stack);
    return response.status(500).send('Ошибка при запросе ' + error.stack);
  });
}

const createUser = (request, response) => {
  const { name, email, password } = request.body;
  bcrypt
    .hash(password, 10)
    .then(hash => {
      const created_on = moment(new Date());
      const values = [name, email, hash, created_on]
      pool
      .query(`INSERT INTO users(name, email, password, created_on) VALUES($1, $2, $3, $4) RETURNING *`, values)
      .then(res => {
        let options = {
          path: "/",
          sameSite: true,
          maxAge: 1000 * 60 * 60 * 48,
          httpOnly: true,
        };
        const result = res.rows[0];
        delete result.password;
        response.cookie("x-access-token", get_token(result), options);
        return response.send(result);
      })
      .catch(error => {
        logger.info(`Create User Error While Register User: ${error.stack}`);
        return response.status(400).send({ message: 'Ошибка при регистрации пользователя: ' + error.stack })
      })
  }).catch(error => {
      logger.info(`Create User Error While Hashing: ${error.stack}`)
      return response.status(400).send({ message: 'Ошибка при регистрации пользователя: ' + error.stack })
  })
}

const createAdmin = (request, response) => {
  bcrypt
    .hash(adminData.password, 10)
    .then(hash => {
      const created_on = moment(new Date());
      const values = [adminData.name, adminData.email, hash, created_on]
      pool
      .query(`INSERT INTO users(name, email, password, created_on) VALUES($1, $2, $3, $4) RETURNING *`, values)
      .then(res => {
        let options = {
          path: "/",
          sameSite: true,
          maxAge: 1000 * 60 * 60 * 48,
          httpOnly: true,
        };
        const result = res.rows;
        delete result.password;
        logger.debug('Admin created');
        response.cookie("x-access-token", get_token(result), options);
        return response.send('Администратор создан');
      })
      .catch(error => {
        logger.info(`Create User Error While Register User: ${error.stack}`);
        return response.status(400).send({ message: 'Ошибка при регистрации пользователя: ' + error.stack })
      })
  }).catch(error => {
      logger.info(`Create User Error While Hashing: ${error.stack}`)
      return response.status(400).send({ message: 'Ошибка при регистрации пользователя: ' + error.stack })
  })
}

const getUserById = (request, response) => {
  const id = request.params.id;
  pool
  .query(`SELECT id, name, email, have_access, is_admin created_on FROM users WHERE id=${id}`)
  .then(res => {
    return response.status(200).send(res.rows[0])
  })
  .catch (error => {
    logger.info(`Error while querying user ${error.stack}`);
    return response.status(400).send({ message: 'Ошибка при запросе пользователя: ' + error.stack })
  })
}

const updateUser = (request, response) => {
  const { name, email, password, is_admin, have_access} = request.body;
  bcrypt
  .hash(password, 10)
  .then(hash => {
      pool.query(`UPDATE users 
      SET name=${name}, email=${email}, password=${hash}, is_admin=${is_admin}, have_access=${have_access} 
      WHERE id=${request.params.id} RETURNING *`)
      .then(res => {
        logger.debug('Пользователь изменен');
        return response.status(201).send(res.rows[0]);
      })
      .catch(error => {
        logger.info(error.stack);
        return response.status(400).send('Что-то пошло не так');
      })
    })
  .catch(error => {
    logger.info(error.stack);
    return response.status(400).send('Ошибка при хешировании пароля');
  })

}

const deleteUser =  (request, response) => {
  pool
  .query(`DELETE FROM users WHERE id=${request.params.id}`)
  .then(res => {
    const result = res.rows[0];
    delete result.password;
    return response.send(result);
  })
  .catch(error => {
    logger.info(`Error while deleting user ${error.stack}`);
    return response.status(400).send({ message: 'Ошибка при удалинии пользователя: ' + error.stack })
  })
}

const login = async (request, response) => {
  const { email, password } = request.body;
  pool
  .query(`SELECT * FROM users WHERE email=${email}`)
  .then(res => {
    bcrypt
    .compare(password, res.rows[0].password)
    .then(() => {
      let options = {
        path: "/",
        sameSite: true,
        maxAge: 1000 * 60 * 60 * 48, // 48 hours
        httpOnly: true,
      };
      const result = res.rows[0];
      delete result.password;
      response.cookie("x-access-token", get_token(result), options);
      return response.send(result);
    })
    .catch(() => response.status(401).send('Не верный пароль'))
  })
  .catch(error => {
    logger.info(`Error while login ${error.stack}`);
    return response.status(400).send({ message: 'Ошибка при вход в систему: ' + error.stack })
  })
}

export { 
  createAdmin,
  userList,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  login
};
