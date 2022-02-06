var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const colors = require('colors');
const errorHandler = require('./middlewares/error');
const dotenv = require('dotenv')
const connectDB = require('./config/db')

// Load env variables
dotenv.config({ path: './config/config.env' })

// Connect to database
connectDB()

// Route files
const bootcamps = require('./routes/bootcamps')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Mount routers
app.use('/api/bootcamps', bootcamps);

app.use(errorHandler)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
