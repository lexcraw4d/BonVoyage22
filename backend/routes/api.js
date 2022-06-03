const express = require('express');
const router = express.Router();

const config = require('../config.js');

const { Client, PlaceInputType, PlaceType1, PlaceType2 } = require("@googlemaps/google-maps-services-js");
const client = new Client({});

router.get('/test', function(req, res, next) {
  res.json({message:'OK'});
});

/*
    Return an array of POI in the given radius of a location.

    Uses the Places Nearby Search API:
    https://developers.google.com/maps/documentation/javascript/get-api-key#place_search_requests
*/
router.get('/nearby', async function(req, res, next) {
  const params = {
    key: config.api.key,
    location: [-33.8665433,151.1956316],
    radius: 5000,
    type: PlaceType1.restaurant,
  };

  try {
    const r = await client.placesNearby({ params: params });
    res.json(r.data);
  }
  catch(error) {
    console.log(error);
  }
});

module.exports = router;
