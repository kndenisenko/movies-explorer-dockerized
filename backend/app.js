// Dependencies from NPM
const express = require('express');
const dotenv = require('dotenv');
// const { celebrate, Joi } = require('celebrate');
const { errors } = require('celebrate');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const route = require('./routes/index');

// User's dependencies
const cors = require('./middlewares/cors');
const rateLimit = require('./middlewares/rateLimit');
const { requestLogger, errorLogger } = require('./middlewares/logger');

// const { NODE_ENV, BACKEND_PORT, MONGO_BASE_CONNECTION } = process.env;

// const { NotFoundError } = require('./errors/NotFoundError');
const error500 = require('./middlewares/errorHandler');
const { constants } = require('./const/const');

// подключаем dotenv
dotenv.config();

const app = express();
// Подключаем логгер запросов
app.use(requestLogger);
rateLimit(app);

app.use(cors);

// Используем helmet и body parser
app.use(helmet());
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Подключаемся к БД moongoose
mongoose.set('strictQuery', false); // убираем warning из консоли при старте
mongoose.connect(process.env.MONGO_BASE_CONNECTION);

route(app);

// Подключаем логгер ошибок
app.use(errorLogger);

// Обработка ошибок celebrate
app.use(errors());

// // Ошибка 404 для несуществующих страниц
// app.use((req, res, next) => {
//   next(new NotFoundError('Ошибка 404 - Страницы не существует'));
// });

// Обработка ошибок сервера, ошибка 500
error500(app);

console.log('status', process.env.NODE_ENV);
console.log('Port', process.env.BACKEND_PORT);


app.listen(process.env.BACKEND_PORT, () => {
});
