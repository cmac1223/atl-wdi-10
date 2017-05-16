// app.js
var express = require('express'); // Loading the express module on our server
var app = express(); // Creates a new instance of express on our server



var hbs = require('hbs');

app.set("view engine", "hbs");

app.set('views', './views');



app.get('/greeting', function(req, res) {
    console.log(req.query);
    
    res.render('greeting', {
      data: req.query.saying
    });
});



//require express package
// var express = require('express');
//save an express module as 'app'
// var app     = express();
// assigning 3000 as our port
var port    = 3000;

app.get('/topping/:type', function(req, res, next) {

    res.send(`${req.params.type}.pizza! Good choice.`);
});


//  app.get('/order/:amount/:size', function(req, res, next) {

//      res.send( `Your order for ${req.params.amount} ${req.params.size}.  pizzas will be ready in 1 minute!` );
//  });    

app.get('/order', function(req, res) {
    console.log(req.query);
    
    res.render('order', {
      data: req.query.amount,
      data1: req.query.size
    });
});

// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});