/**
 * Contains all the necessary settings to run the application like port, routes, connection to database, error handling, etc.
 * @author Juan Pablo Allin Cañas - jpac.647@gmail.com
 * @version 1.0.0
 */
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const mongodb = 'mongodb://localhost/Ejercicio-nodejs-sofka';

/**
 * Connection to MongoDB
 */
mongoose.connect(mongodb, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB is connected'))
    .catch(err => console.log(err));

const app = express();
app.use(express.static("./public/images"));

/**
 * View engine setup
 */
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'html')
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Sends requests to the server.
 */

app.use(express.static(path.join(__dirname, "node_modules/bootstrap/dist/")));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


/**
 * Routes
 */
app.use('/', require('./routes/index'));
app.use('/instructions', require('./routes/instructions'));
app.use('/createGame', require('./routes/createGame'));
app.use('/startGame', require('./routes/startGame'));
app.use('/allGames', require('./routes/allGames'));
app.use('/getGame', require('./routes/getGame'));
app.use('/winner', require('./routes/winner'));

/**
 * catch 404 and forward to error handler
 */
app.use(function(req, res, next) {
  next(createError(404));
});

/**
 * Error handler
 */
app.use(function(err, req, res, next) {
  /**
   * Set locals, only providing error in development
   */
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  /**
   * Render the error page
   */
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
