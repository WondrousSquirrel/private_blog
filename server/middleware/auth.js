import jwt from "jsonwebtoken";

import { authConfig } from "../config";

const getToken = (user) => {
  return jwt.sign(
    {
      _id: user.id,
      name: user.name,
      email: user.email,
      is_admin: user.is_admin,
      have_access: user.have_access
    },
    authConfig.secretKey,
    {
      expiresIn: '48h',
    }
  );
};


const isAuthenticated = (request, response, next) => {
  const _token = request.headers.authorization;
  if (_token) {
    const token = _token.slice(7, _token.length);
    jwt.verify(token, authConfig.secretKey, (err, decode) => {
      if (err) {
        return response.status(401).send('Не верный токен');
      }
      request.user = decode;
      next();
    });
  } else {
    return response.status(401).send('Необходимо войти в систему');
  }
};

const isAdmin = async (request, response, next) => {
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


export { getToken, isAuthenticated, isAdmin  };
