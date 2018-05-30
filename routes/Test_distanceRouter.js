var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var userlocation = require('../controllers/DistanceCountController');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('test_distance', {title: 'Testing'});
});

router.post('/', function (req, res, next) {
    var iData = req.body;
    if (iData == null) {
        res.status(403).send('No data sent!')
    }
    console.log(iData.userlatitude, iData.userlongitude);
    userlocation.save(iData.userlatitude, iData.userlongitude);
});


module.exports = router;
