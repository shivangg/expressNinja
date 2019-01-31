const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');

const app = express();

app.use(bodyParser.json());

// initialize routes
app.use('/api', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`I'm listening to ${PORT}`);
})