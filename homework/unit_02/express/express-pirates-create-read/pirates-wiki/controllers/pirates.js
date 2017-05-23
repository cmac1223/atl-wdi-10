//your code below
var express = require('express');
var router = express.Router();
var pirates = require('../models/pirates.js');

/* INDEX PIRATES */
router.get('/', function(req, res) {
  
  res.render('pirates/index', {
  pirates: pirates.piratesList 

  });

});

/* CREATE PIRATES */
router.post('/', function(req, res){
  var newPirates = {
        name:            req.body.name,
        birthplace:      req.body.birthplace,
        death_year:      req.body.death_year,
        base:            req.body.base,
        nickname:        req.body.nickname
    };
    pirates.piratesList.push(newPirates);
    res.redirect('/pirates');
}); 

/* NEW PIRATES */
router.get('/new', function(req, res){
  res.render('pirates/new');
});

/* SHOW TODONTS */
router.get('/:id', function(req, res) {
  var pirates = pirates.piratesList[req.params.id];

  res.render('pirates/show', {
    pirates: pirates
  });
});


 //EDIT TODO
router.get('/:id/edit', function(req, res){

  res.render('pirates/edit',{
    pirates: {
      name:          pirates.piratesList[req.params.id].name,
      birthplace:    pirates.piratesList[req.params.id].birthplace,
      death_year:    pirates.piratesList[req.params.id].death_year,
      base:          pirates.piratesList[req.params.id].base,
      nickname:      pirates.piratesList[req.params.id].nickname,
      id:            req.params.id  
    }
  });
});

// Update
router.put('/:id', function(req, res) {
  var piratesToEdit           = pirates.piratesList[req.params.id];
  piratesToEdit.name          = req.body.name;
  piratesToEdit.birthplace    = req.body.birthplace;
  piratesToEdit.death_year    = req.body.death_year;
  piratesToEdit.base          = req.body.base;
  piratesToEdit.nickname      = req.body.nickname;
  res.redirect('/pirates');
});

//DELETE
router.delete('/:id', function(req, res) {
  pirates.piratesList.splice(req.params.id, 1);
  res.redirect('/pirates');
});


module.exports = router;