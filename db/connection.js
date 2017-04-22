const url = process.env.MONGODB_URI || 'localhost/conquest-game'

const db = require('monk')(url)

module.exports = db