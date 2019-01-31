const express = require('express');

const router = express.Router();

// get a list of ninjas from db
router.get('/ninjas', (req, res) => {
  res.send({
    type: 'GET'
  });
});

// add a new ninja to db
router.post('/ninjas', (req, res) => {
  console.log(req.body);
  res.send({
    type: 'POST',
    name: req.body.name
  });
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