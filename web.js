#!/usr/bin/env node

var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

var content;
var buffer=new Buffer("Hello", "utf-8");
// First I want to read the file
var data = fs.readFileSync('index.html', "utf-8");
    buffer.write(data,"utf-8");

    // Invoke the next step here however you like
//    console.log(content);   // Put all of the code here (not the best solution)
var content = buffer.toString('utf-8');
console.log(data);
//}, "utf-8");

app.get('/', function(request, response) {
  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});