import jwt from "jsonwebtoken";

import { authConfig } from "../config";
import pool from "../services/postgres";
import logger from "../services/logger";

const get_token = (user) => {
  const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      is_admin: user.is_admin,
  }
  return jwt.sign(
    payload,
    authConfig.secretKey,
    {
      expiresIn: "48h",
    }
  );
};


const is_authenticated = async (request, response, next) => {
  try {
    const token = request.cookies["x-access-token"];
    if (token) {
      const decode = jwt.verify(token, authConfig.secretKey);
      pool
      .query(`SELECT * from users WHERE id=${decode.id}`)
      .then(res => {
        const result = res.rows[0];
        delete result.password;
        request.user = result;
      })
      .catch(error => {
        
        logger.info(error);
        return response.status(403).send('Что-то пошло не так');
      })
      next();
    } else {
      return response.status(403).send('Пожалуйста войдите в систему');
    }
  } catch (error) {
    return response.status(500).send(error.stack);
  }
};

const is_admin = async (request, response, next) => {
  try {
    const user = request.user;
    if (user.is_admin === false) {
      return response.status(403).send("Необходимы привелегии администратора");
    }
    next();
  } catch (error) {
    return response.status(500).send(error.stack);
  }
};


export { get_token, is_authenticated, is_admin  };
