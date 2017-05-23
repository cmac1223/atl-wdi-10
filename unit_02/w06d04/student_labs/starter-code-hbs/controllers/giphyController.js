var express     = require('express');
var jquery      = require('jquery');
var giphyRouter = express.Router();

giphyRouter.get('/newGif', function(req, res){
    res.render('giphy/index');
});

module.exports  = giphyRouter;