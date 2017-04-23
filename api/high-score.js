const express = require('express')
const db = require('../db/high-score')

const router = express.Router()

router.get('/', (req, res, next) => {
  db.getAll()
  .then(data => {
    setTimeout(() => {res.json(data)}, 1000)
  })
  .catch(err => next(err))
})

router.post('/', (req, res, next) => {
  req.body.score = +req.body.score

  db.add(req.body)
  .then(data => res.json(data))
  .catch(err => next(err))
})

module.exports = router
