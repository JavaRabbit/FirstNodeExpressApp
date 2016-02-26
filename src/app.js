'use strict';

var express = require('express');

var app = express();

app.get('/', function(request, response){
  response.send("I <3 macs");
}); // this is the route to the home

app.listen(3000);
console.log("server is runnign");
