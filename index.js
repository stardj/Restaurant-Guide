var express = require('express');
var router = express.Router();
var bodyParser= require("body-parser");
var multer = require('multer');
var uploads = multer({dest: 'public/images/'})
var fs = require('fs');
var pathLib = require("path");

var Image = require('../models/image');
var restaurant = require('../controllers/restaurants');
var initDB= require('../controllers/init');
initDB.init();


/* GET home page. */
router.get('/index', function(req, res) {
  res.render('index', { title: 'Restaurant Guide Search' });
});

router.post('/index', uploads.any(), function (req, res){
    var userData = req.body;
    if (userData == null) {
        res.status(403).send('No data sent!')
    }

    uploads.keepExtensions = true;
    console.log(req.files);
    var newName = req.files[0].destination + req.files[0].filename + pathLib.parse(req.files[0].originalname).ext;
    var newName2 = req.files[1].destination + req.files[1].filename + pathLib.parse(req.files[1].originalname).ext;

    fs.rename(req.files[0].path, newName, function(err){
        if (err)
            res.send("upload err");
        else
        var image = new Image({
            data1:userData.logo,
            logo_image:newName,
            logo_image2:newName2,
        });
            image.save(function (err, info) {
                console.log(info);
                if (err)
                    res.status(500).send('Invalid data!');
                    res.setHeader('Content-Type', 'application/json');
                    res.send(JSON.stringify(image));
                 });




    });
});

//下面是原版insert
/* GET home page. */
// router.get('/insert', function(req, res, next) {
//   res.render('insert', { title: 'Restaurant Guide Insert' });
// });
//
// router.post('/insert', image.insert);


// router.get('/load', function(req, res, next) {
//     res.render('load', { title: 'Load!' });
// });
//
// router.post('/load', images.load);



// /* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Express' });
// });
//
// router.post('/', upload.any(),function (req, res, next) {
//     res,send(req.files);
// });

router.get('/delete', function(req, res, next) {
    res.render('delete', { title: 'Restaurant Guide Delete' });
});

router.post('/delete', restaurant.delete);



module.exports = router;
