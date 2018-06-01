var Restaurant = require('../models/RestaurantsModel');

exports.insert = function (req, res) {
    var userData = req.body;
    if (userData == null) {
        res.status(403).send('No data sent!')
    }
    try {
        var restaurant = new Restaurant({
            restaurant_name: userData.restaurantname,   //餐厅名
            user_account: userData.useraccount,         //账户名称
            restaurant_tele: userData.restauranttele,   //餐厅电话
            class_name: userData.TOR,             //餐馆类型
            special_name: userData.TOC,         //菜系
            //locate_longitude: userData.locatelongitude, //经度
            //locate_latitude: userData.locatelatitude,   //纬度
            post_code: userData.address,               //邮编
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