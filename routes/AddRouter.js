var express = require('express');
var FileReader = require('FileReader');
var router = express.Router();
var bodyParser = require("body-parser");
var multer = require('multer');
var uploads = multer({dest: 'public/images/'})
var fs = require('fs');
var pathLib = require("path");
var restaurant = require('../controllers/RestaurantsController');
// var initDB = require('../controllers/init');
// initDB.init();


/* GET home page. */
router.get('/', function (req, res) {
    var data = {title: 'Restaurant Guide'};
    console.log("get");
    res.render('add', data);

});

router.post('/', function () {
    console.log("testing");
});   //upload the images to the destination

    // console.log("add router");
    // var userData = req;
    // console.log(userData);
    // var a =new FileReader();
    // a.onload=function(e) {
    //     callback(e.target.result);
    // }
    // a.readAsDataURL(blob);
    // console.log(a.readAsDataURL(blob));

   //  var userData = req.body;
   // //uploads.array(req.a);
   //  if (userData == null) {
   //      res.status(403).send('No data sent!')
   //  }
   //  console.log(req.size);
   //  uploads.keepExtensions = true;
    // var newName = "public/images" + req.files[0].name;
    // var newName2 = "public/images" + req.files[1].name;
    // fs.rename(req.files[0].path, newName);
    // fs.rename(req.files[1].path, newName2);
   // res.setHeader('Content-Type', 'application/json');
    //res.send(JSON.stringify("123"));
//});


module.exports = router;
