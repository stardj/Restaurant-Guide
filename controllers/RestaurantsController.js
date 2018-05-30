var Restaurant = require('../models/RestaurantsModel');

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

function parser4Json(data) {

}


exports.insert = function (req, res) {
    var userData = req.body;
    if (userData == null) {
        res.status(403).send('No data sent!')
    }
    try {
        var restaurant = new Restaurant({
            restaurant_name: userData.restaurantname,   //餐厅名
            restaurant_tele: userData.restauranttele,   //餐厅电话
            class_name: userData.classname,             //餐馆类型
            special_name: userData.specialname,         //菜系
            locate_longitude: userData.locatelongitude, //经度
            locate_latitude: userData.locatelatitude,   //纬度
            post_code: userData.postcode,               //邮编
            rank_score: userData.rank,                  //评分
            image1: userData.image1,                    //第一张图
            image2: userData.image2,                    //第二张图
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
