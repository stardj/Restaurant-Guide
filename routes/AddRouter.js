var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var multer = require('multer');
var uploads = multer({dest: 'public/images/'})
var fs = require('fs');
var pathLib = require("path");
var add = require('../controllers/RestaurantsController');
// var add = require()
var initDB = require('../controllers/init');
initDB.init();


/* GET home page. */
router.get('/', function (req, res) {
    var data = {title: 'Restaurant Guide'};
    res.render('add', data);

});

router.post('/',uploads.any(), function (req, res) {   //upload the images to the destination and rename them because of '/' and '\'
    var userData = req.body;
    // console.log(userData.image1);
    uploads.keepExtensions = true;

    var userData = req.body;
    if (userData == null) {
        res.status(403).send('No data sent!')
    }
    uploads.keepExtensions = true;
    //console.log("222222");

    var newName = "public/images" + req.files[0].name;
    var newName2 = "public/images" + req.files[1].name;
    fs.rename(req.files[0].path, newName);
    fs.rename(req.files[1].path, newName2);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(newName));
});


module.exports = router;
