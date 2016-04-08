var express = require('express');
var app = express();
var path = require ('path');

var democrats = ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'];
var republicans = ['Disco Stu', 'Duffman', 'Frank Grimes', 'Joey Jo-Jo Junior Shabadoo'];

app.use(express.static('public'));

app.get('/', function(request, response){
  response.sendFile(__dirname + 'public/index.html');
});

app.get('/democrats', function(request, response){
  response.send(democrats);
});

app.get('/republicans', function(request, response){
  response.send(republicans);
});

app.get('/winner', function(request, response){
  var candidates = democrats.concat(republicans);
  var randomWinner = candidates[Math.floor(Math.random() * candidates.length)];
  response.send(randomWinner);
});

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
});
