var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");


var restaurant = require('../controllers/RestaurantsController');
var initDB = require('../controllers/init');
initDB.init();


/* GET home page. */
router.get('/index', function (req, res, next) {
    var data = {title: 'Restaurant Guide Search'};
    res.render('index', data);
});

router.post('/index', restaurant.finding);

/* GET home page. */
router.get('/insert', function (req, res, next) {
    res.render('insert', {title: 'Restaurant Guide Insert'});
});

router.post('/insert', restaurant.insert);


/* search page */
router.get('/', function (req, res, next) {
    res.render('search', {title: 'COM3504'});
});
module.exports = router;
