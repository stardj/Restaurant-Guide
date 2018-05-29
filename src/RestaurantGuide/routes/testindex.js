var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");


var restaurant = require('../controllers/restaurants');
var initDB = require('../controllers/init');
initDB.init();


/* GET home page. */
router.get('/', function (req, res, next) {
    var data = {title: 'Restaurant Guide Search'};
    res.render('testindex', data);
});

router.post('/', restaurant.finding);

module.exports = router;
