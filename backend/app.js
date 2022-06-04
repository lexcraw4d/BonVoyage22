const express = require('express')

const config = require('./config.js');
const route_api = require('./routes/api.js');
const route_client = require('./routes/client.js');
const route_maps = require('./routes/maps.js');

const app = express();
const port = config.port;

app.use(route_client);
app.use('/api', route_api);
app.use('/maps', route_maps);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


module.exports = app; // for testing
