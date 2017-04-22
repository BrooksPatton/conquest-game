const db = require('./connection')

const user = db.get('userData')

function add(obj){
    return user.insert(obj)
}

function getAll(){
    return user.find({})
}

module.exports = {
    add,
    getAll
}