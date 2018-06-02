var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
// var login = require('../controllers/LoginController');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('map', {title: 'Log In'});
    // res.sendfile('map.html');
});

router.post('/', function (req, res) {

});

module.exports = router;
