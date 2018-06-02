var Restaurant = require('../models/RestaurantModel');
var Location = require('../models/LocationModel');
var mongoose = require('mongoose');

exports.finding = function (req, res) {
    var userData = req.body;
    console.log(userData);
    onlyNameSearch(userData, res);

    // if (userData.restauranttype != null || userData.cuisinetype != null) {
    //     nameAndTypeSearch(userData, res);
    // } else {
    //     nameSearch(userData, res);
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
                console.log(restaurant.post_code);
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
                console.log(restaurant.post_code);
            });
            console.log("#########");
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(restaurant));
        }
    });
}

function nameSearch(userData, res) {
    Restaurant.find({restaurant_name: {$regex: userData.restaurantname, $options: "$i"}}, function (err, restaurant) {
        if (err) {
            res.send('error has occured');
        } else {
            console.log("#########");
            restaurant.forEach(function (restaurant) {
                console.log(restaurant.post_code);
            });
            console.log("#########");
            res.setHeader('Content-Type', 'application/json');
            res.send(distanceSearch(userData, restaurant));
        }
    });
}


function distanceSearch(userData, restaurant) {
    var result = [];
    restaurant.forEach(function (value) {
        if (userData.distance >= sphereDistance(value.locate_longitude, value.locate_latitude)) {
            result.push(value);
        }
    });
    return result;
}

function sphereDistance(a, b) {
    var ax = null;
    var ay = null;
    var bx = null;
    var by = null;
    for (var key in a) {
        if (ax == null) {
            ax = a[key] * (Math.PI / 180);

        } else if (ay == null) {
            ay = a[key] * (Math.PI / 180);

        }

    }
    for (var key in b) {
        if (bx == null) {
            bx = b[key] * (Math.PI / 180);

        } else if (by == null) {
            by = b[key] * (Math.PI / 180);

        }

    }

    var sin_x1 = Math.sin(ax), cos_x1 = Math.cos(ax);
    var sin_y1 = Math.sin(ay), cos_y1 = Math.cos(ay);
    var sin_x2 = Math.sin(bx), cos_x2 = Math.cos(bx);
    var sin_y2 = Math.sin(by), cos_y2 = Math.cos(by);
    var cross_prod = cos_y1 * cos_x1 * cos_y2 * cos_x2 + cos_y1 * sin_x1 * cos_y2 * sin_x2 + sin_y1 * sin_y2;
    if (cross_prod >= 1 || cross_prod <= -1) {
        if (!(Math.abs(cross_prod) - 1 < 0.000001)) {
            return false;
        }
        return cross_prod > 0 ? 0 : Math.PI;
    }
    return Math.acos(cross_prod);
}