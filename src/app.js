'use strict';

var express = require('express'),
    posts = require('./mockdata/posts.json');

var app = express();
var port = 8080 || process.env.PORT;

app.get('/', function(req, res){
  res.send("<h1>I love Macs </h1>");
}); // this is the route to the home

app.get('/blog', function(req, res){
  res.send(posts);
});

app.get('/bear', function(req, res){
  res.send("<h1>I love Bears and Tigers</h1>");
}); // this is the route to the home

app.listen(port, function(){
console.log("it is working on port 8080")
});
