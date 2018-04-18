var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var register = require('../controllers/register');
// var initDB= require('../controllers/init');
// initDB.init();


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('register', {title: 'register'});
});

router.post('/', register.insert);


module.exports = router;
