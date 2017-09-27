var express = require('express')
var app = express()
var path = require('path')
var cors = require('cors')

app.use(express.static('public'));
app.use(cors())

app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  return next();
});

app.get('/home.html', function(req, res) {
    res.sendFile(path.resolve('../public/home.html'))
});

app.get('/berries.html', function(req, res) {
    res.sendFile(path.resolve('../public/berries.html'))
});

app.get('/contests.html', function(req, res) {
    res.sendFile(path.resolve('../public/contests.html'))
});

app.get('/games.html', function(req, res) {
    res.sendFile(path.resolve('../public/games.html'))
});

app.get('/moves.html', function(req, res) {
    res.sendFile(path.resolve('../public/moves.html'))
});

app.get('/items.html', function(req, res) {
    res.sendFile(path.resolve('../public/items.html'))
});

app.get('/pokedex.html', function(req, res) {
    res.sendFile(path.resolve('../public/pokedex.html'))
});

app.get('/locations.html', function(req, res) {
    res.sendFile(path.resolve('../public/locations.html'))
});

app.listen(8080, function () {
  console.log('Server running on localhost:8080/home.html')
})
