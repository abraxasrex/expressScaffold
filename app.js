var express = require('express');
//core module VVV
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// import mongoose
var mongoose = require('mongoose');

var Drink = require('./models/Drink');

mongoose.connect("mongodb://jonathan:reasor@ds111851.mlab.com:11851/barstucks")
.then(()=>{
    console.log('success');

    Drink.create({
      name: 'unicorn frappe',
      mainIngredient: 'sour sugar stuff'
    }).then(()=>{
      console.log('posted frap');
    }).catch((e)=> {console.log(e); });

}).catch((e)=> { console.log(e); });

//import statements for our routes
var index = require('./routes/index');
// rest API could imported here
var drinks = require('./api/drinks');
// creating application instance
var app = express();

// adding view folder with the name 'views'
app.set('views', path.join(__dirname, 'views'));
// view engine setup
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// boilerplate express magic
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//identifying our static assets
app.use(express.static(path.join(__dirname, 'public')));
//other assets could be 'used' here

//using our view routes
//  'localhost:3000'
app.use('/', index);
app.use('/api/', drinks);
//rest API files could be 'used' here

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  //err.status  
  err["status"] = 404;
  next(err);
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

/// export our application instance !
module.exports = app;
