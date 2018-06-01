var Restaurant = require('../models/RestaurantsModel');

exports.finding = function (req, res) {
    var userData = req.body;
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