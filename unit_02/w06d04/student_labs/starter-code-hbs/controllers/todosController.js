// var express = require('express');
// var todosRouter = express.Router();
// var data = require('../data.js');

// var seededTodos = require('../seededTodos.js');

// todosRouter.get('/', function(req, res){
    
//       var numberOfTodos = seededTodos.length;

//       res.render('todos/index', {
//         todos: seededTodos,
//         numberOfTodos: numberOfTodos
//       });
// });
// //new todo
// todosRouter.get('/new', function(req, res){
//     res.render('todos/new');
//     console.log('WELCOME!!');   
// })
// //show todo
// todosRouter.get('/:id', function(req, res){
//     var todoIndex = req.params.id;
//     var todoToShow = seededTodos[todoIndex];

//     res.render('todos/show', {
//         todo: todoToShow.description,
//         urgent: todoToShow.urgent
//     })
// })


// // todosRouter.post('/', )  
// module.exports = todosRouter;


var express = require('express');
var router = express.Router();
var data = require('../data.js');
/* INDEX TODOS */
router.get('/', function(req, res) {
  res.render('todos/index', {
    todos: data.seededTodos
  });
});
/* CREATE TODO */
router.post('/', function(req, res){
  var newTodo = {
        description: req.body.description,
        urgent: req.body.urgent
    };
    data.seededTodos.push(newTodo);
    // res.send("Create a new todo is working!");
    res.redirect('/todos');
});
/* NEW TODO */
router.get('/new', function(req, res){
  res.render('todos/new');
});
/* SHOW TODO */
router.get('/:id', function(req, res) {
  var todo = data.seededTodos[req.params.id];
  res.render('todos/show', {
    todo: todo
  });
});
module.exports = router;