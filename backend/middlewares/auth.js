// backend/middlewares/auth.js
const jwt = require('jsonwebtoken');
const { UnauthorizedError } = require('../errors/UnauthorizedError');
const { constants } = require('../const/const');

// const { NODE_ENV, REACT_APP_JWT_SECRET } = process.env;

// Значаение payload будет перезаписано, поэтому оно создано через let
let payload;

// Обработка авторизации
const isAuthorized = (req, res, next) => {
  const auth = req.headers.authorization;
  // Если аутентификация неудачна
  if (!auth) {
    console.log('authorization error:', req.headers.authorization);
    throw new UnauthorizedError(constants.AUTH_FAILED_TOCKEN_CHECK);
  }

  const token = auth.replace('Bearer ', '');

  // console.log('middlewares/auth.js, process.env.NODE_ENV', process.env.NODE_ENV);
  // console.log('middlewares/auth.js, process.env.REACT_APP_JWT_SECRET', process.env.REACT_APP_JWT_SECRET);

  try {
    payload = jwt.verify(token, process.env.NODE_ENV === 'production' ? process.env.REACT_APP_JWT_SECRET : 'blah-blah-key');
  } catch (err) {
    throw new UnauthorizedError(constants.AUTH_REQUIRED);
  }

  req.user = payload;
  next();
};

module.exports = { isAuthorized };
