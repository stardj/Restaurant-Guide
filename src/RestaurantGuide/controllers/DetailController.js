var Restaurant = require('../models/RestaurantModel');
var mongoose = require('mongoose');

exports.finding = function (req, res) {
    var userData = req.body;
    console.log(userData);
    Restaurant.find({_id: mongoose.Types.ObjectId(userData.id)}, function (err, restaurant) {
        console.log(userData.length);
        if (err) {
            res.send('error has occured');
        } else {
            console.log("#########");
            console.log(restaurant);
            console.log("#########");

            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(restaurant));
        }
    });
};