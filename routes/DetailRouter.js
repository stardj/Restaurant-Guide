var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");

var restaurant = require('../controllers/ReviewController');
var restaurant = require('../controllers/RestaurantsController');
var initDB = require('../controllers/init');
initDB.init();


/* GET home page. */
router.get('/', function (req, res, next) {
    var data = {title: 'Restaurant Guide'};
    res.render('testdetail', data);
});

router.post('/', restaurant.finding);

module.exports = router;
