var express = require('express');
var router = express.Router();
var bodyParser= require("body-parser");
var multer = require('multer')
var upload = multer({dest: 'public/images/'})

var mongoose = require('mongoose');
var DB = 'mongodb://localhost/restaurants';
var Restaurant = require('../models/restaurants');
var restaurant = require('../controllers/restaurants');
var initDB= require('../controllers/init');
initDB.init();

mongoose.connect(DB);
//11111
/* GET home page. */
router.get('/index', function(req, res, next) {
    //  res.render('index', { title: 'Express' });
    // if(req.query.search){
    //     const regex = new RegExp(escapeRegex(req.query.search), 'gi');
    //     Restaurant.find({name: regex}, function (err, restaurants) {
    //         if (err) {
    //             res.send('error has occured');
    //         } else {
    //             //res.render('/index', {DB:restaurants});
    //             console.log(restaurants);
    //             res.json(restaurants);
    //         }
    //     });
    // }else {
    //    // const regex = new RegExp(escapeRegex(req.query.search), 'gi');

        //下面是多项checkbox查询
        Restaurant.find({$or:[{class_name:"Chinese"},{special_name:"Curry"},{post_code:"S3 7HB"}]}, function (err, restaurants) {
            if (err) {
                res.send('error has occured');
            } else {
                console.log(restaurants);
                res.json(restaurants);
            }
        });

        //下面是模糊查询，和上面冲突，分别调用
        Restaurant.find({class_name:{$regex:"chi",$options:"$i"}}, function (err, restaurants) {
            if (err) {
                res.send('error has occured');
            } else {
                console.log(restaurants);
                res.json(restaurants);
            }
        });

    // }
    // if(req.query.search){
    //     Restaurant.find({}, function (err, allRestaurants) {
    //         if (err) {
    //             console.log(err);
    //         } else {
    //             res.render("/index", {restaurants: allRestaurants});
    //         }
    //
    //     });
    //
    // }else {
    //
    //     Restaurant.find({}, function (err, allRestaurants) {
    //         if (err) {
    //             console.log(err);
    //         } else {
    //             res.render("/index", {restaurants: allRestaurants});
    //         }
    //
    //     });
    // }
});

// router.post('/index', function (req, res, next){
//     Restaurant.find({})
//         .exec(function (err, Restaurant) {
//             if
//         })
// });


/* GET home page. */
router.get('/insert', function(req, res, next) {
  res.render('insert', { title: 'Restaurant Guide Insert' });
});

router.post('/insert', restaurant.insert);

/* GET home page. */
// router.get('/index', function(req, res, next) {
//     res.render('index', { title: 'Express' });
// });
//
// router.post('/index', upload.any(),function (req, res, next) {
//     res,send(req.files);
// });

function escapeRegex(text){
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

module.exports = router;
