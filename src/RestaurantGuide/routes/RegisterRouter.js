var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var register = require('../controllers/RegisterCotroller');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('register', {title: 'Registration'});
});

router.post('/', register.insert);

module.exports = router;
