var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var restaurant = require('../controllers/AddController');
var initDB = require('../controllers/init');
initDB.init();


/* GET home page. */
router.get('/', function (req, res, next) {
    var data = {title: 'Restaurant Guide'};
    res.render('add', data);
});

router.post('/', restaurant.insert);


module.exports = router;
