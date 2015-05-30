var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/wells', function(req, res, next) {
  res.render('wells', { title: 'Infected Wells' });
});

module.exports = router;
