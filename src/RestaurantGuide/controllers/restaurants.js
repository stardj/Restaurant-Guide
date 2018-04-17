var Restaurant = require('../models/restaurants');

exports.getAge = function (req, res) {
    var userData = req.body;
    if (userData == null) {
        res.status(403).send('No data sent!')
    }
    try {
        Restaurant.find({first_name: userData.firstname, family_name: userData.lastname, restaurant_name: userData.restaurantname, class_name: userData.classname,
                        special_name: userData.specialname, locate_longitude: userData.locatelongitude, locate_latitude: userData.locatelatitude, post_code: userData.postcode,
                        rank_score: userData.rank, level_score: userData.level},
            'first_name family_name dob age class special',
            function (err, restaurants) {
                if (err)
                    res.status(500).send('Invalid data!');
                var restaurant = null;
                if (restaurants.length > 0) {
                    var firstElem = restaurants[0];
                    restaurant = {
                        Restaurantname: firstElem.restaurant_name,
                        class: firstElem.class_name,
                        special: firstElem.special_name,
                        longitude: firstElem.locate_longitude,
                        latitude: firstElem.locate_latitude,
                        Postcode: firstElem.post_code,
                        Rank: firstElem.rank_score,
                        Level: firstElem.level_score
                    };
                }
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(restaurant));
            });
    } catch (e) {
        res.status(500).send('error ' + e);
    }
}


exports.insert = function (req, res) {
    var userData = req.body;
    if (userData == null) {
        res.status(403).send('No data sent!')
    }
    try {
        var restaurant = new Restaurant({
            restaurant_name: userData.restaurantname, //餐厅名
            class_name: userData.classname,           //餐馆类型
            special_name: userData.specialname,       //招牌菜
            locate_longitude: userData.locatelongitude,//经度
            locate_latitude: userData.locatelatitude, //纬度
            post_code: userData.postcode,            //邮编
            rank_score: userData.rank,               //排名
            level_score: userData.level             //评分
        });
        console.log('received: ' + restaurant);

        restaurant.save(function (err, results) {
            console.log(results._id);
            if (err)
                res.status(500).send('Invalid data!');

            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(restaurant));
        });
    } catch (e) {
        res.status(500).send('error ' + e);
    }
}
