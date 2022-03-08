
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();
const port = process.env.port || 3000;
const cors = require('cors');
const { text } = require('body-parser');
const send = require('send');
var palabra = "aun no se asigna el valor";

app.use(express.static('public'));
app.use(cors());
app.use(express.json()) ;
app.get('/get', (req, res) => {
    res.send(palabra);
});

app.post('/', function (req, res) {
    palabra = '"'+JSON.stringify(req.body)+'"'
    res.json(req.body)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
