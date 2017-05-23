var express          = require('express');
var hbs              = require('hbs');
var path             = require('path');
var port             = process.env.PORT || 3000;
var methodOverride   = require('method-override');


var app               = express();
var bodyParser        = require('body-parser');
//controllers for `/pirates` resource
var pirateController = require('./controllers/pirates.js');


app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(methodOverride('_method'));
app.use('/pirates', pirateController);


// HOME
app.get('/', function(req,res) {
  //res.send('This is our Home Page'); 
  res.render('welcome');
});

app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot pirates on port', port,"//", new Date());
});


