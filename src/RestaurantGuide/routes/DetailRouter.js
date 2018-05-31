var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var detail = require('../controllers/DetailController');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('detail', {title: 'Detail'});
});

router.post('/', detail.finding);

module.exports = router;
