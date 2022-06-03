var express = require('express');
var router = express.Router();

router.get('/test', function(req, res, next) {
  res.json({message:'OK'});
});

module.exports = router;
