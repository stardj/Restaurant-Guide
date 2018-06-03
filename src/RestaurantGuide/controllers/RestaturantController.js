var Restaurant = require('../models/RestaurantModel');
var Location = require('../models/LocationModel');
// var multer = require('multer');
// var uploads = multer({dest: 'public/images/'});
var fs = require('fs');
// var pathLib = require("path");
const multer = require('multer');
const path = require('path');


exports.insert = function (req, res, next) {

    var userData = req.body;
    console.log(userData);

    if (userData == null) {
        res.status(403).send('No data sent!')
    }
    // res.send({value: "True"});


    // var userData = req.body;
    // if (userData == null) {
    //     res.status(403).send('No data sent!')
    // }

    var restaurant = new Restaurant({
        restaurant_name:userData.restaurantname,
        restaurant_tele:userData.restauranttele,
        restaurant_type:userData.TOR,
        cuisine_type:userData.TOC,
        address:userData.address,
        image1:userData.JYH1,
        image2:userData.JYH2,
        locate_longitude: userData.locatelongitude,
        locate_latitude: userData.locatelatitude
    });
    console.log(restaurant);

    restaurant.save(function (err, results) {
                if(err)
                    res.status(500).send('invalid data');

                res.setHeader('Content-Type', 'application/json');
        res.status(200).send({value: "True"});
                //res.send(JSON.stringify(restaurant));
            });

    // try {
    //     var restaurant = new Restaurant({
    //         restaurant_name: userData.restaurantname,
    //         user_account: userData.useraccount,
    //         restaurant_tele: userData.restauranttele,
    //         restaurant_type: userData.TOR,
    //         cuisine_type: userData.TOC,
    //         post_code: userData.address,
    //         rank_score: userData.rank,
    //         image1: userData.image1,
    //         image2: userData.image2,
    //         locate_longitude: {type: String},
    //         locate_latitude: {type: String}
    //     });
    //     restaurant.save(function (err, results) {
    //         if (err)
    //              res.status(500).send('Invalid data!');
    //          res.send(JSON.stringify({value: "True"}));
    //     });
    //
    //     // var location = new Location({
    //     //     restaurant_id: restaurant._id,
    //     //     locate_longitude: userData.locatelongitude,
    //     //     locate_latitude: userData.locatelatitude,
    //     // });
    //
    //     // location.save(function (err) {
    //     //     if (err)
    //     //         res.status(500).send('Invalid data!');
    //     //
    //     // });
    // } catch (e) {
    //     res.status(500).send('error ' + e);
    // }
};
