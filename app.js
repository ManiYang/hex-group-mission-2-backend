var express = require('express');
const cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// MongoDB
const connectString = process.env.DATABASE.replace(
    '<password>',
    process.env.DATABASE_PASSWORD ??= ''
);
mongoose.connect(connectString).then(() => {
    console.log('成功連上資料庫');
})

//
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);
app.use('/users', usersRouter);

//
module.exports = app;
