var express = require('express');
var todosRouter = express.Router();

var seededTodos = require('../seededTodos.js');

todosRouter.get('/', function(req, res){
    
      var numberOfTodos = seededTodos.length;

      res.render('todos/index', {
        todos: seededTodos,
        numberOfTodos: numberOfTodos
      });
});
//new todo
todosRouter.get('/new', function(req, res){
    res.render('todos/new');
    console.log('WELCOME!!');   
})
//show todo
todosRouter.get('/:id', function(req, res){
    var todoIndex = req.params.id;
    var todoToShow = seededTodos[todoIndex];

    res.render('todos/show', {
        todo: todoToShow.description,
        urgent: todoToShow.urgent
    })
})


// todosRouter.post('/', )  
module.exports = todosRouter;