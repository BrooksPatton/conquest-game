var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Small World Conquest - A game for Ludum Dare 38' });
});

module.exports = router;
