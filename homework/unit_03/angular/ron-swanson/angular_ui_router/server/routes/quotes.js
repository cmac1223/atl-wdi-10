var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser') //parses information from POST
var methodOverride = require('method-override')
var Quote = require('../../models/quote.js');

// console.log('Testing before the Get Route');

// //your routes here

// //localhost:3000/quotes/
// // GET
// router.get('/', function(request, response) {
//     console.log('Testing Get Route ')
//   Quote.find(function(error, quotes) {
//     if(error) response.json({message: 'Could not find any quotes'});

//     response.json({quotes: quotes});
//   })
// });
// console.log(router);

// POST test in postman 
// router.post('/', function(request, response) {
//   console.log('in POST');
//   console.log('body:',request.body);

//   var quote = new Quote(request.body);

//   quote.save(function(error) {
//     if(error) response.json({messsage: 'Could not ceate quote b/c:' + error});

//     response.json({quote: quote});
//   });
// });

 module.exports = router;
