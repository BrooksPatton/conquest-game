var express = require('express');
var router = express.Router();
const userQueries = require('../db/user-queries')

/* GET users listing. */
router.get('/', function(req, res, next) {
  userQueries.getAll()
  .then(users => {
    res.json(users)
  })
  .catch(err => next(err))
});

router.post('/', (req, res, next) => {
  userQueries.add(req.body)
  .then(data => res.json(data))
  .catch(err => next(err))
})

module.exports = router;
