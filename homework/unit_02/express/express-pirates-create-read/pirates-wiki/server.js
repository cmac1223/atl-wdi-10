//your code here
//package
var bodyParser = require('body-parser');
var path        = require('path');
var logger      = require('morgan');
var express     = require('express');
var hbs         = require('hbs');
// app use
var app         = express();
var port        = process.env.PORT || 3000;


app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot pirates on port', port,"//", new Date());
});