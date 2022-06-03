const express = require('express');
const router = express.Router();

const config = require('../config.js');

const { Client, PlaceInputType, PlaceType1, PlaceType2 } = require("@googlemaps/google-maps-services-js");
const client = new Client({});

router.get('/test', function(req, res, next) {
  res.json({message:'OK'});
});

router.get('/loc', async function(req, res, next) {
  const params = {
    input: "Museum of Modern Art",
    inputtype: PlaceInputType.textQuery,
    key: config.api.key,
    fields: ["place_id", "name", "formatted_address"],
  };

  const r = await client.findPlaceFromText({ params: params });
  res.json(r.data);
});

module.exports = router;
