var express = require('express');
var router = express.Router();
var bodyParser= require("body-parser");


var restaurant = require('../controllers/restaurants');
var initDB= require('../controllers/init');
initDB.init();


/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Restaurant Guide Search' });
});

router.post('/index', restaurant.getAge);


/* GET home page. */
router.get('/insert', function(req, res, next) {
  res.render('insert', { title: 'Restaurant Guide Insert' });
});

router.post('/insert', restaurant.insert);


/* search page */
router.get('/search', function(req, res, next) {
    res.render('search', { title: 'COM3504' });
});
module.exports = router;
