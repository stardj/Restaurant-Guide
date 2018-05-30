var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var login = require('../controllers/LoginController');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('login', {title: 'Log in'});
});

router.post('/', login.loginCheck);

module.exports = router;
