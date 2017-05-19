//your code here
//package
var bodyParser       = require('body-parser');
// var path          = require('path');
 var logger        = require('morgan');
//var router           = express.router();
var express          = require('express');
var hbs              = require('hbs');
var pirateController = require('./controllers/pirates.js');
// app use
var app              = express();
var port             = process.env.PORT || 3000;
/* set up the application params*/  
app.use(bodyParser.urlencoded({
    extended: true
}));



//controllers for `/pirates` resource
var pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);

app.get('/', function(req,res) {
  res.send('This is our Home Page');
});

app.set('view engine', 'hbs');
app.set('views', './views');


app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot pirates on port', port,"//", new Date());
});



