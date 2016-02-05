var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var apiRequest = require('./routes/ApiRequest');
var locations = require('./routes/locations');
var services = require('./routes/services');
var employees = require('./routes/employees');
var availability = require('./routes/availability');
var login = require('./routes/login');
var register = require('./routes/register');
var incompleteAppointment = require('./routes/incompleteAppointment');
var CompleteBooking = require('./routes/completeBooking');
var getAppointments = require('./routes/getAppointments');
var cancelAppointments = require('./routes/cancelAppointments');
var cardTypes = require('./routes/cardTypes');
var geoLocation = require('./routes/geoLocation');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/apiRequest', apiRequest);
app.use('/apiRequest/locations', locations);
app.use('/apiRequest/services', services);
app.use('/apiRequest/employees', employees);
app.use('/apiRequest/availability', availability);
app.use('/apiRequest/login', login);
app.use('/apiRequest/register', register);
app.use('/apiRequest/IncompleteBooking', incompleteAppointment);
app.use('/apiRequest/CompleteBooking', CompleteBooking);
app.use('/apiRequest/customer', getAppointments);
app.use('/apiRequest/cancel', cancelAppointments);
app.use('/apiRequest/cardTypes', cardTypes);
app.use('/apiRequest/getCustomer', cardTypes);
app.use('/apiRequest/geoLocations', geoLocation);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
