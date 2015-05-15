var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/statistic', function(req, res, next) {
  res.render('statistic', { title: 'Statistic' });
});

module.exports = router;