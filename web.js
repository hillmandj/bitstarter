var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var buf = require('buffer');

var file_str = fs.readFileSync('index.html');
var makebuf = file_str.toString('utf-8');

app.get('/', function(request, response) {
  response.send(makebuf);
});

app.use(express.static(__dirname+'/images'));

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
