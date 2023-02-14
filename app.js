const express = require('express');
const router = require('./routes/index');
const { errorHandler } = require('./errorHandler');


const app = express();

app.use(express.json());  // подключаем BodyParser на все роуты
app.use('/api', router);

app.use(errorHandler);

module.exports = app;