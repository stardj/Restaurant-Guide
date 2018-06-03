var express = require('express');
// express.static('./public');
var router = express.Router();
var bodyParser = require("body-parser");
var multer = require('multer');
const path = require('path');
var Restaurant = require('../controllers/RestaturantController');
//var Restaurant = require('../models/RestaurantModel');
var indexTmp = 1;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve('../public/images'));
    },
    filename: function (req, file, cb) {
        var userData = req.body;
        cb(null, (new Date().toLocaleString() + "_" + indexTmp++) + path.extname(file.originalname));
    }
});

const upload = multer({storage: storage});


/* GET home page. */
router.get('/', function (req, res) {
    res.render('add', {title: 'Restaurant Guide Search'});
});

router.post('/', upload.any(), Restaurant.insert)

    // var userData = req.body;
    // if (userData == null) {
    //     res.status(403).send('No data sent!')
    // }
    //
    // var restaurant = new Restaurant({
    //     restaurant_name:userData.restaurantname,
    //     restaurant_tele:userData.restauranttele,
    //     restaurant_type:userData.TOR,
    //     cuisine_type:userData.TOC,
    //     address:userData.address,
    //     image1:userData.JYH1,
    //     image2:userData.JYH2,
    //     locate_longitude: userData.locatelongitude,
    //     locate_latitude: userData.locatelatitude
    // });
    // console.log(restaurant);



    //
    //     restaurant.save(function (err, results) {
    //         if(err)
    //             res.status(500).send('invalid data');
    //
    //         res.setHeader('Content-Type', 'application/json');
    //         res.send(JSON.stringify(restaurant));
    //     });


    // console.log(userData);
    // res.send("hello world");
//





module.exports = router;
