const express = require('express');
const router = express.Router();

const config = require('../config.js');

const { Client, PlaceInputType, PlaceType1, PlaceType2 } = require("@googlemaps/google-maps-services-js");
const client = new Client({});

/*
  XXX Remove this once you start having "real" tests :/
*/
router.get('/test', function(req, res, next) {
  res.json({status:'OK'});
});

/*
    Return an array of strings whose values may be used as the `type` parameter for
    the `/api/nearby` endpoint.
*/
router.get('/types', function(req, res, next) {
  // XXX Just mock then endpoint for now
  // Probably, should iterate of ownPropertiesOf PlaceType1
  const types = [
    PlaceType1.airport,
    PlaceType1.bar,
    PlaceType1.dentist,
    PlaceType1.restaurant,
    PlaceType1.supermarket,
  ];

  res.json({
    results: types,
    status: "OK",
  });
});

/*
    Return an array of POI in the given radius of a location.

    Uses the Places Nearby Search API:
    https://developers.google.com/maps/documentation/javascript/get-api-key#place_search_requests

    Usage:
    /api/async?lat=...&lng=...&type=...

    Type is optional and defaults to 'retaurant'
*/
router.get('/nearby', async function(req, res, next) {
  // XXX Handle exception in parameter types
  const lat = parseFloat(req.query.lat);
  const lng = parseFloat(req.query.lng);
  const type = req.query.type || PlaceType1.restaurant;

  const params = {
    key: config.api.key,
    location: [lat, lng],
    radius: 5000,
    type: type
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
