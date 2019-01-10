const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root', 
  password: '',
  database: 'burgers_db'
})

connection.connect(function(err) {
  if (err) {
    console.log(err)
    return
  }
  console.log(`connected as id ${connection.threadId}`)
})

modules.exports = connection