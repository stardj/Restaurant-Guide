var Restaurant = require('../models/RestaurantModel');
// var Location = require('../models/LocationModel');
var mongoose = require('mongoose');

exports.finding = function (req, res) {
    var userData = req.body;
    console.log(userData);

    if (!(isNotNull(userData.locate_latitude) && isNotNull(userData.locate_longitude))) {
        onlyNameSearch(userData, res);
    }  else {
        nameSearch(userData, res);
    }
    // else if (isNotNull(userData.typeOfRestaurant) || isNotNull(userData.typeOfCuisine)) {
    //     nameAndTypeSearch(userData, res);
    // }
};

function nameAndTypeSearch(userData, res) {
    Restaurant.find({
        restaurant_name: {$regex: userData.restaurantname, $options: "$i"},
        $or: {
            restaurant_type: {$regex: userData.restauranttype, $options: "$i"},
            cuisine_type: {$regex: userData.cuisinetype, $options: "$i"}
        }
    }, function (err, restaurant) {
        if (err) {
            res.send('error has occured');
        } else {
            console.log("#########");
            restaurant.forEach(function (restaurant) {
                console.log(restaurant.address);
            });
            console.log("#########");
            res.setHeader('Content-Type', 'application/json');
            res.send(distanceSearch(userData, restaurant));
        }
    });
}

function onlyNameSearch(userData, res) {
    Restaurant.find({restaurant_name: {$regex: userData.restaurantname, $options: "$i"}}, function (err, restaurant) {
        if (err) {
            res.send('error has occured');
        } else {
            console.log("#########");
            restaurant.forEach(function (restaurant) {
                console.log(restaurant.restaurant_name);
            });
            console.log("#########");
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(restaurant));
        }
    });
}

function nameSearch(userData, res) {
    // console.log(userData);
    Restaurant.find({restaurant_name: {$regex: userData.restaurantname, $options: "$i"}}, function (err, restaurant) {
        if (err) {
            res.send('error has occured');
        } else {
            console.log("#########");
            restaurant.forEach(function (restaurant) {
                console.log(restaurant.restaurant_name);
            });
            console.log("#########");
            res.setHeader('Content-Type', 'application/json');
            res.send(distanceSearch(userData, restaurant));
        }
    });
}

function isNotNull(data) {
    return data != null && data != "" && data != undefined ? true : false;
}


function distanceSearch(userData, restaurant) {
    var result = [];
    console.log("location: ");
    console.log("long: " + userData.locate_longitude);
    console.log("lat: " + userData.locate_latitude);

    restaurant.forEach(function (value) {
        console.log(value.restaurant_name + ":");
        console.log("long: " + value.locate_longitude);
        console.log("lat: " + value.locate_latitude);
        var temp = GetDistance(userData.locate_latitude, userData.locate_longitude, value.locate_latitude, value.locate_longitude);
        // var temp = GetDistance(39.95676, 116.401394, 36.63014, 114.499574);
        console.log("distance: " + temp);
        if (userData.distance >= temp * 1000) {
            result.push(value);
        }
    });
    return result;
}

function GetDistance(lat1, lng1, lat2, lng2) {

    var radLat1 = lat1 * Math.PI / 180.0;
    var radLat2 = lat2 * Math.PI / 180.0;
    var radLon1 = lng1 * Math.PI / 180.0;
    var radLon2 = lng2 * Math.PI / 180.0;
    var R = 6371;
    var d = Math.acos(Math.sin(radLat1) * Math.sin(radLat2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radLon2 - radLon1)) * R;
    return d;
}
