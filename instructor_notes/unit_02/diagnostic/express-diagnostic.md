# Diagnostic Unit 2.1

### Question 1: What is the Request/Response Cycle?  How does it work?

Request/Respnse Cycle is a cycle that describes a client's request to a server's response.  

### Question 2: What are the differences between a GET request and a POST request?
A GET request allows you to read a site while a POST request allows you to create a request
### Question 3: What does `npm init` do?
`npm init` is how you initialize your packages
### Question 4: What does CRUD stand for?  What are the HTTP verbs that are associated with each function?
CRUD stands for Create, Read, Update, Delete

### Question 5: If we have a form where we want to create new data, what type of `method` do we use in our form?  
POST

### Question 6: If the following form was submitted, what would `action="myScript.js"` do?

it allows your javascript file to perform some action it links the two

```
<form method="POST" action="myScript.js?_method=PUT">
  <input type="text" value="name"/>
  <button type="submit">Submit</button>
</form>
```

### Question 7: Write an express route that handles a POST request to the url `/menus` and redirects to the `/homepage`

router.post('/menus', function(req, res){
 
    
    res.redirect('/homepage');
});

### Question 8: In the following express route, write how you would grab the values of `:id` and `:song_id` in javascript.

```
app.get("/artist/:id/song/:song_id"), function(req, res){
  res.render('/:id/:song_id');
}
```

### Question 9: What is MVC? How have we been using it so far?
Module View Controller = MVC, 
## Bonus Question

### Question 10: Write an express route that handles a GET request to the url `/products` and sends back the JSON object {error: "Bad Request"}
