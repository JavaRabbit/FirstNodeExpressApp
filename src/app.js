'use strict';

var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.send("<h1>I love Macs </h1>");
}); // this is the route to the home

app.listen(3000, function(){
console.log("it is working on port 3000")
});
