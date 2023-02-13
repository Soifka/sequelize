const express = require('express');
const router = require('./routes/index');


const app = express();

app.use(express.json());  // подключаем BodyParser на все роуты
app.use('/api', router);


module.exports = app;