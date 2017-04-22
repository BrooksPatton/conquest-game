const db = require('./connection')

const user = db.get('userData')

function add(obj){
    return user.insert(obj)
}

function getOne(_id){
    return user.findOne({_id})
}

function create(name) {
    const userObj = {
        name
    }

    return user.insert(userObj)
}

module.exports = {
    add,
    getOne,
    create
}