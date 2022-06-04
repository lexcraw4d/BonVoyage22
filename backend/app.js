const express = require('express')

const config = require('./config.js');
const route_api = require('./routes/api.js');
const route_client = require('./routes/client.js');

const app = express();
const port = config.port;

app.use(route_client);
app.use('/api', route_api);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


module.exports = app; // for testing
