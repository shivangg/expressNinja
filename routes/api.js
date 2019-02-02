const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

// get a list of ninjas from db
router.get('/ninjas', (req, res, next) => {
  res.send({
    type: 'GET'
  });
});

// add a new ninja to db
router.post('/ninjas', (req, res, next) => {
  Ninja.create(req.body)
    .then( ninja => {
      res.send(ninja);
    })
    .catch(next);
});

// update a ninja from the db
router.put('/ninjas/:id', (req, res, next) => {
  res.send({
    type: 'PUT'
  });
});

// delete a ninja from db
router.delete('/ninjas', (req, res, next) => {
  res.send({
    type: 'DELETE'
  });
});

module.exports = router;