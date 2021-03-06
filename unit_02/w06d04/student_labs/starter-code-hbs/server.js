/* packages */

var bodyParser = require('body-parser');
var path        = require('path');
var logger      = require('morgan');
var express     = require('express');
var hbs         = require('hbs');
/* app settings*/
var app         = express();
var port        = process.env.PORT || 3000;
/* set up the application params*/
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/public'));

var todosController = require('./controllers/todosController.js');
  app.use('/todos', todosController);

  var giphyController = require('./controllers/giphyController.js');
  app.use('/giphy', giphyController);


    

// log
app.use( logger('dev'));

/*Views*/
app.set('view engine', 'hbs');

/* HOME */
app.get('/', function(req,res) {
  res.send('This is our Home Page');
});


// Start server
app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
});
