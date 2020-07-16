import jwt from "jsonwebtoken";

import { authConfig } from "../config";

const getToken = (user) => {
  return jwt.sign(
    {
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.is_admin,
      haveAccess: user.have_access
    },
    authConfig.secretKey,
    {
      expiresIn: '48h',
    }
  );
};


const isAuthenticated = (request, response, next) => {
  const token = request.cookies["x-access-token"];
  if (token) {
    jwt.verify(token, authConfig.secretKey, (err, decode) => {
      if (err) {
        return response.status(401).send({ message: 'Не верный токен' });
      }
      request.user = decode;
      next();
      return;
    });
  } else {
    return response.status(401).send({ message: 'Необходимо войти в систему.' });
  }
};

const isAdmin = async (request, response, next) => {
  try {
    const user = request.user;
    if (user.isAdmin === false) {
      return response.status(403).send("Необходимы привелегии администратора");
    }
    next();
  } catch (error) {
    return response.status(500).send(error.stack);
  }
};


export { getToken, isAuthenticated, isAdmin  };
