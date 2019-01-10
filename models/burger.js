const orm = require('../config/orm.js')

const burger = {
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res)
    })
  },
  insertOne: function(column, value, cb) {
    orm.insertOne('burgers', column, value, function(res) {
      cb(res)
    })
  },
  updateOne: function(field, value, id, cb) {
    orm.updateOne('burgers', field, value, id, function(res) {
      cb(res)
    })
  }
}

module.exports = burger