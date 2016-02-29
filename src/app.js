'use strict';

var express = require('express'),
    posts = require('./mockdata/posts.json'),
    graphs = require('./mockdata/memusage.json');


var app = express();
var port = 8080 || process.env.PORT;

app.set('view engine', 'jade');
app.set('views', __dirname + '/templates');

app.get('/', function(req, res){
  res.render('index')
  //res.send("<h1>I love Macs </h1>");
}); // this is the route to the home

app.get('/jsontest', function(req, res){
  res.render('jsontest')
})

app.get('/blog/:title?', function(req, res){ // ? makes the param optiona;
  var title = req.params.title;
  if(title == undefined){
    res.send("In progress")
  } else {
    var post = posts[title];
    res.send(post);
  }
});

app.get('/bear', function(req, res){
  res.send("<h1>I love Bears and Tigers</h1>");
}); // this is the route to the home

app.get('/firstchart', function(req, res){
  res.send(graphs);
});


app.listen(port, function(){
console.log("it is working on port 8080")
});
