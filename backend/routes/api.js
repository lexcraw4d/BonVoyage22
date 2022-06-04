const express = require('express');
const router = express.Router();

const config = require('../config.js');

const { Client, PlaceInputType, PlaceType1, PlaceType2 } = require("@googlemaps/google-maps-services-js");
const client = new Client({});
const types = Object.getOwnPropertyNames(PlaceType1);

/*
  Helpers (move in their own file?)
*/
function sendErrInvalid(req, res) {
  res.status(400);
  res.json({
    results: [],
    status: "ERR_INVALID",
  });
}

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
  const lat = Number(req.query.lat);
  const lng = Number(req.query.lng);
  const type = req.query.type || 'restaurant';

  // Paramater validation
  if (!Number.isFinite(lat) || !Number.isFinite(lng) || (types.indexOf(type) == -1)) {
    return sendErrInvalid(req, res);
  }
  // else

  const params = {
    key: config.api.key,
    location: [lat, lng],
    radius: 5000,
    type: PlaceType1[type],
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
