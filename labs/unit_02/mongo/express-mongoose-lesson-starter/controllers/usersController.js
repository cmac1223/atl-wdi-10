var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Item = require("../models/item");

//users index route
router.get('/', function(request, response){
    User.find({})

    .exec(function(error, userList){

        if (error) {
            console.log("Error while retrieving users: " + error);
            return;
        }
        
        //response.send(userList);
        response.render('users/index',{
            userList: userList
        });
    })
})

//user create form
router.get('/new', function(request, response){
    response.render('users/new')

})

// user create route
router.post('/', function(request, response){
    var newUserFromForm = request.body;
   
    var user = new User({
        first_name: newUserFromForm.first_name,
        email: request.body.email,
        items: request.body.items
    });
    console.log(user, request);
    user.save(function(err, user) {
        if(err) { 
            console.log(err);
            return;
        }
       response.redirect('/users');
    });
});

   
    

//user show route
router.get('/:id', function(request, response){
    var userId = request.params.id;
    User.findById(userId)
        .exec(function (error, user){

            if (error){
                console.log("Error while retrieving user with ID of " + userId);
                console.log("Error message: " + error);
                return;
            }
            response.render('users/show', {
                user: user
            });
        })
})


//user edit
router.get('/edit/:id', function(request, response){
    var userId = request.params.id;
     User.findById(userId)
        .exec(function (error, user){

            if (error){
                console.log("Error while retrieving user with ID " + userId);
                console.log("Error message: " + error);
                return;
            }
            response.render('users/show', {
                user: user
            });
        })


    response.render('users/edit', {
        user: user
    })
})

// user update
router.put('/:id', function(request, response){

    var userId = request.params.id;
    var newUserInfo = request.body;
    User.findByIdAndUpdate(userId, newUserInfo, {new: true})
        .exec(function(error, user){
            if(error) {
                console.log("Error while updating User with ID " + userId);
                return;
            }
            response.redirect(userId);
    });
    
    
});

//user create form
// router.get('/new', function(request, response){
//     response.render('users/new')

// })

//user destroy
// router.get('/delete/:id', function(request, response){
//     var userId = request.params.id;
//     User.findByIdAndRemove(userId)
//     .exec(function(error, user){
//         if(error){
//             console.log("Error while deleting User with ID of " + userId);
//             return;
//         }
//         response.redirect('/user');
//     })

// })


//add a new item


//remove an item

module.exports = router;






// // USERS INDEX ROUTE
// router.get('/', function(req, res){
//     User.find({})
//     .exec(function(err, users){
//         if (err){
//             console.log(err);
//             return;
//         }

//         console.log(users);
//         res.send(users);
//     })
// })

// // USER SHOW ROUTE
// router.get('/:id', function(req, res) {
//     User.findById(req.params.id)
//     .exec(function(err, user) {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log(user);
//         res.send(user);
//     })
// });

    


// // USER CREATE ROUTE
// router.post('/', function(req, res) {
//   var user = new User({
//     first_name: req.body.first_name,
//     email: req.body.email,
//     items: req.body.items
//   });
//   user.save(function(err, user) {
//     if(err) console.log(err);
    
//     console.log(user);
//     res.send(user);
//   });
// });



// // USER UPDATE ROUTE
// router.patch('/:id', function(req, res) {
//   User.findByIdAndUpdate(req.params.id, {
//     first_name: req.body.first_name,
//     email: req.body.email
//   }, {new: true})
//   .exec(function(err, user) {
//     if (err) console.log(err);
    
//     console.log(user);
//     res.send(user);
//   });
// }); 

// // USER DESTROY
// router.delete('/:id', function(req, res) {
//   User.findByIdAndRemove(req.params.id)
//   .exec(function(err, user) {
//     if(err) console.log(err);
    
//     console.log('User deleted!');
//     res.send("User deleted");
//   });
// });


// // ADD A NEW ITEM
// router.post('/:id/items', function(req, res) {
//   User.findById(req.params.id)
//   .exec(function(err, user) {
//     user.items.push(new Item({name: req.body.name}));
//     user.save(function(err) {
//       if (err) {
//           console.log(err);
//           return;
//       }
//       res.send(user);
//     });
//   });
// });


// // REMOVE AN ITEM
// router.delete('/:userId/items/:id', function(req, res) {
//   User.findByIdAndUpdate(req.params.userId, {
//     $pull: {
//       items: {_id: req.params.id}
//     }
//   })
//   .exec(function(err, item) {
//     if (err) console.log(err);
    
//     res.send(item + " Item deleted");
//   });
// });

// module.exports = router;
