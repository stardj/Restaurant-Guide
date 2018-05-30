var Review = require('../models/ReviewModel');

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

    Review.find({restaurant_name: {$regex: userData.restaurantname, $options: "$i"}}, function (err, review) {
        if (err) {
            res.send('error has occured');
        } else {
            console.log("#########");
            review.forEach(function(restaurant){
                console.log(review.useraccount);
            });
            console.log("#########");

            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(review));
        }
    });
};


exports.insert = function (req, res) {
    var userData = req.body;
    if (userData == null) {
        res.status(403).send('No data sent!')
    }
    try {
        var review = new Review({
            restaurant_name: userData.restaurantname, //餐厅名
            user_account: userData.useraccount,           //评论账户
            review_time: userData.reviewtime,       //评论时间
            review_detail: userData.reviewdetail,   //评论详情
            rank_score: userData.rank,               //给分
            image1: userData.image1,                 //第一张图
            image2: userData.image2                 //第二张图
        });
        console.log('received: ' + review);

        review.save(function (err, results) {
            console.log(results._id);
            if (err)
                res.status(500).send('Invalid data!');

            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(review));
        });
    } catch (e) {
        res.status(500).send('error ' + e);
    }
}
