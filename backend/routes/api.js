var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect(301, '/');
});

module.exports = router;
