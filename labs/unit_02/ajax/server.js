var express             = require('express');
var hbs                 = require('hbs');
var app                 = express()
var port                = process.env.PORT || 3000;
var methodOverride      = require('method-override');
var bodyParser          = require('body-parser');
//var app                 = express();
// var port                = process.env.PORT || 3000;
var favoritesController = require('./controllers/favorites_controllers.js');
var searchController    = require('./controllers/search_controllers.js');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(methodOverride('_method'));
app.use('/search',searchController);


app.get('/', function(req,res) {
  res.send('This is our Home Page'); 
  //res.render('welcome');
});

app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot AJAX on port', port,"//", new Date());
});