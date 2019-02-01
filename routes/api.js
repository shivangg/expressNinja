const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

// get a list of ninjas from db
router.get('/ninjas', (req, res) => {
  res.send({
    type: 'GET'
  });
});

// add a new ninja to db
router.post('/ninjas', (req, res) => {
  Ninja.create(req.body)
    .then( ninja => {
      res.send(ninja);
    })
});

// update a ninja from the db
router.put('/ninjas/:id', (req, res) => {
  res.send({
    type: 'PUT'
  });
});

// delete a ninja from db
router.delete('/ninjas', (req, res) => {
  res.send({
    type: 'DELETE'
  });
});

module.exports = router;