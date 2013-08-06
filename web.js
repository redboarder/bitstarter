#!/usr/bin/env node

var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

var fileName = 'index.html';
var data="";
fs.exists(fileName, function(exists) {
  if (exists) {
    fs.stat(fileName, function(error, stats) {
      fs.open(fileName, "r", function(error, fd) {
        var buffer = new Buffer(stats.size);
        buffer=fs.readFileSync(fileName);
          data = buffer.toString("utf8", 0, buffer.length);
          // console.log(data);
          fs.close(fd);
      });
    });
  }
});


app.get('/', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

