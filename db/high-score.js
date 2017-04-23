const db = require('./connection')

const query = db.get('highScores')

function add(obj){
    return query.insert(obj)
}

function getOne(_id){
    return query.findOne({_id})
}

function getAll() {
  return query.find({}, {sort: {score: -1}, limit: 10})
}

module.exports = {
    add,
    getOne,
  getAll
}
