var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var register = require('../controllers/RegisterController');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('login', {title: 'My Form'});
});

router.post('/', register.login);


module.exports = router;
