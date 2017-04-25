const express = require('express')
const db = require('../db/high-score')

const router = express.Router()

router.get('/', (req, res, next) => {
  db.getAll()
  .then(data => {
    if(data.length < 10) {
      for(let i = data.length; i < 10; i++) {
        data[i] = {score: 0}
      }
    }

    res.json(data)
  })
  .catch(err => next(err))
})

router.post('/', validator, prepScore, (req, res, next) => {
  if(!req.ok) {
    console.error('validation failed')
    return res.sendStatus(200)
  }

  req.body.score = +req.body.score

  db.add(req.body)
  .then(data => res.json(data))
  .catch(err => next(err))
})

function validator(req, res, next) {
  const code = process.env.SECRET_CODE || 'supersecretcode'
  let ok = true

  if(!req.body.code) ok = false
  if(req.body.code !== code) ok = false
  if(!req.body.score) ok = false

  req.ok = ok

  next()
}

function prepScore(req, res, next) {
  req.body.score = Number(req.body.score)


  if(isNaN(req.body.score)) req.ok = false

  next()
}
module.exports = router
