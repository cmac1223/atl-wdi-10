var express = require('express');
var router  = express.Router();

//SEARCH
router.get('/', function(req, res) {
  
  res.render('search/index', {
   //todonts: data.seededToDonts
  });
});

module.exports = router;