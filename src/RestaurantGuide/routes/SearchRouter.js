var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");


var searchController = require('../controllers/SearchController');

/* GET home page. */
router.get('/', function (req, res, next) {
    var data = {title: 'Restaurant Guide'};
    res.render('search', data);
});

router.post('/', searchController.finding);

module.exports = router;
