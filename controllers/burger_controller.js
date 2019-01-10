const express = require('express')
const router = express.Router()
const burger = require('../models/burger.js')

router.get('/', function(req, res) {
  burger.selectAll(function(data) {
    res.render('index', {burgers: data})
  })
})

router.post('/api/burgers', function(req, res) {
  burger.insertOne(
    'burger_name', 
    'devoured', 
    true, 
    req.body.id, 
    function(data) {
      // IS THIS REALLY NEEDED?
      res.json({id: data.insertId})
    }
  )
})

router.put('/api/burgers/:id', function(req, res) {
  let id = req.params.id
  burger.updateOne(
    'devoured',
    true,
    id,
    function(data) {
      if(data.changedRows == 0) {
        // NO ROWS CHANGED AND ID DOESNT EXIST
        return res.status(404).end()
      } else {
        res.status(200).end()
      }
    }
  )
})

module.exports = router