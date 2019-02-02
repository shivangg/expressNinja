const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');

const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

// to parse json req.body
app.use(bodyParser.json());

// initialize routes
app.use('/api', routes);

// middleware to handle error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(422).send({
    error: `${err.name}: ${err.message}`
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`I'm listening to ${PORT}`);
})