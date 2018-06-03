var Restaurant = require('../models/RestaurantModel');
var Location = require('../models/LocationModel');
var multer = require('multer');
var uploads = multer({dest: 'public/images/'})
var fs = require('fs');
var pathLib = require("path");

exports.finding = function (req, res) {
    var userData = req.body;
    var testdata = {
        root: [

            {name: '1', value: '0'},
            {name: '6101', value: '西安市'},
            {name: '6102', value: '铜川市'},
            {name: '6103', value: '宝鸡市'},
            {name: '6104', value: '咸阳市'},
            {name: '6105', value: '渭南市'},
            {name: '6106', value: '延安市'},
            {name: '6107', value: '汉中市'},
            {name: '6108', value: '榆林市'},
            {name: '6109', value: '安康市'},
            {name: '6110', value: '商洛市'}

        ]
    };

    Restaurant.find({restaurant_name: {$regex: userData.restaurantname, $options: "$i"}}, function (err, restaurant) {
        if (err) {
            res.send('error has occured');
        } else {
            console.log("#########");
            restaurant.forEach(function(restaurant){
                console.log(restaurant.post_code);
            });
            console.log("#########");

            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(restaurant));
        }
    });
};


exports.insert = function (req, res, next) {

    var userData = req.body;
    console.log(userData);

    if (userData == null) {
        res.status(403).send('No data sent!')
    }
    try {
        var restaurant = new Restaurant({
            restaurant_name: userData.restaurantname,
            user_account: userData.useraccount,
            restaurant_tele: userData.restauranttele,
            restaurant_type: userData.TOR,
            cuisine_type: userData.TOC,
            post_code: userData.address,
            rank_score: userData.rank,
            image1: userData.image1,
            image2: userData.image2,
        });
        restaurant.save(function (err, results) {
            if (err)
                res.status(500).send('Invalid data!');

            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(restaurant));
        });

        var location = new Location({
            restaurant_id: restaurant._id,
            locate_longitude: userData.locatelongitude,
            locate_latitude: userData.locatelatitude,
        });

        location.save(function (err) {
            if (err)
                res.status(500).send('Invalid data!');

        });
    } catch (e) {
        res.status(500).send('error ' + e);
    }
}
