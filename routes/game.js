const express = require('express')
const router = express.Router()
const userQueries = require('../db/user-queries')
const Chance = require('chance')

const chance = new Chance()

router.get('/', getOrCreateUser, (req, res, next) => {
    res.render('game', {
        title: 'Small World Conquest - A game for Ludum Dare 38',
        user: req.user
    })
})

function getOrCreateUser(req, res, next) {
    const userId = req.session.userId

    if(userId) {
        userQueries.getOne(userId)
        .then(user => {
            req.user = user
            req.session.userId = user._id

            next()
        })
        .catch(err => {
            if(err.message === "Cannot read property '_id' of null") {
                req.session.userId = null
                res.redirect('/game')
            }
        })
    } else {
        const randomName = chance.name()

        userQueries.create(randomName)
        .then(user => {
            req.user = user
            req.session.userId = user._id

            next()
        })
        .catch(err => next(err))
    }
}

module.exports = router