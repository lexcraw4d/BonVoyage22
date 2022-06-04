const express = require('express')

const config = require('./config.js');
const api = require('./routes/api.js');

const app = express();
const port = config.port;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', api);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


module.exports = app; // for testing
