const connection = require('../config/connection.js')
const orm = {
  selectAll: function(table, cb) {
    let queryString = `SELECT * FROM ${table};`
    connection.query(queryString, function(err, data){
      if (err) throw err
      cb(data)
    })
  },

  insertOne: function(table, column, value, cb) {
    let queryString = `INSERT INTO ${table} (${column}) VALUES (${value});`
    connection.query(queryString, function(err, data) {
      if (err) throw err
      cb(data)
    })

  },

  updateOne: function(table, field, value, id, cb) {
    let queryString = `UPDATE ${table} SET ${field} = ${value} WHERE id = ${id};`
    connection.query(queryString, function(err, data) {
      if (err) throw err
      cb(data)
    })
  }
}

module.exports = orm