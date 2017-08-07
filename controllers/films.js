//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');
var express = require('express')
var filmsRouter = new express.Router();

var bodyParser = require('body-parser');
filmsRouter.use(bodyParser.json());
filmsRouter.use(bodyParser.urlencoded({extended: true}));


filmsRouter.get('/', function(req, res) {
  res.json( films );
})


filmsRouter.get('/:id', function(req, res) {
  if (films[req.params.id]){
    res.json( films[req.params.id]);
  } else {

    res.send('Maximum index is : ' + films.length)
  }
})

module.exports = filmsRouter