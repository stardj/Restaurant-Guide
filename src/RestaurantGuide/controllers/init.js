var mongoose = require('mongoose');
var Restaurants = require('../models/RestaurantModel');
var userInfo = require('../models/UserInfoModel');
var mongoDB = 'mongodb://localhost:27017/restaurant'
mongoose.connect(mongoDB);


exports.init= function() {
    var restaurant = new Restaurants(
        {
            restaurant_name: "Noodlesta",
            restaurant_tele: "",
            restaurant_type: "1*^",
            cuisine_type: "3*^6*^",
            post_code: "192-194 Brook Hill, Sheffield",
            rank_score: "5",
            image1: "public/images/Noodlesta.jpg",
            image2: "public/images/Noodlesta2.jpg",
            locate_longitude: "53.3821111",
            locate_latitude: "-1.4826127999999699"
        }
    ); restaurant.save();


    var restaurant = new Restaurants(
        {
            restaurant_name: "FirePit",
            restaurant_tele: "0114 249 8151",
            restaurant_type: "1*^3*^",
            cuisine_type: "1*^5*^6*^",
            post_code: "138 West St, Sheffield",
            rank_score: "4",
            image1: "public/images/Firepit.jpg",
            image2: "public/images/Firepit2.jpg",
            locate_longitude: "53.3809068",
            locate_latitude: "-1.4763504999999668"
        }
    ); restaurant.save();

    var restaurant = new Restaurants(
        {
            restaurant_name: "Kias Pastaria",
            restaurant_tele: "0114 250 1111",
            restaurant_type: "1*^3*^4*^",
            cuisine_type: "2*^",
            post_code: "759-761 Abbeydale Rd, Sheffield",
            rank_score: "4",
            image1: "public/images/Kias Pastaria.jpg",
            image2: "public/images/Kias Pastaria2.jpg",
            locate_longitude: "53.3535408",
            locate_latitude: "-1.485813099999973"
        }
    ); restaurant.save();

    var restaurant = new Restaurants(
        {
            restaurant_name: "Forge Bakehouse",
            restaurant_tele: "0114 258 8987",
            restaurant_type: "2*^4*^5*^",
            cuisine_type: "1*^",
            post_code: "302 Abbeydale Rd, Sheffield",
            rank_score: "4",
            image1: "public/images/Forge Bakehouse.jpg",
            image2: "public/images/Forge Bakehouse2.jpg",
            locate_longitude: "53.3613609",
            locate_latitude: "-1.4789859999999635"
        }
    ); restaurant.save();

    var restaurant = new Restaurants(
        {
            restaurant_name: "Starbucks Coffee",
            restaurant_tele: "0114 272 9884",
            restaurant_type: "4*^5*^",
            cuisine_type: "6*^7*^",
            post_code: "295 Western Bank, Broomhill, Sheffield",
            rank_score: "4",
            image1: "public/images/Starbucks Coffee.jpg",
            image2: "public/images/Starbucks Coffee2.jpg",
            locate_longitude: "53.3809168",
            locate_latitude: "-1.492004100000031"
        }
    ); restaurant.save();

    var restaurant = new Restaurants(
        {
            restaurant_name: "Las Iguanas",
            restaurant_tele: "0114 249 8151",
            restaurant_type: "1*^",
            cuisine_type: "1*^4*^7*^",
            post_code: "8-9 Fitzwilliam Street, Devonshire Green, Sheffield",
            rank_score: "4",
            image1: "public/images/Las Iguanas.jpg",
            image2: "public/images/Las Iguanas2.jpg",
            locate_longitude: "53.3794252",
            locate_latitude: "-1.480584399999998"
        }
    ); restaurant.save();

    var userinfo = new userInfo({
            useraccount: "admin",
            userpassword: "pass",
            confirmpw: "pass"
    });userinfo.save(function (err,results) {
        console.log(results.useraccount);
    });

    var userinfo = new userInfo({
        useraccount: "admin",
            userpassword: "pass",
            confirmpw: "pass"
    });userinfo.save();

    var userinfo = new userInfo({
            useraccount: "user",
            userpassword: "pass",
            confirmpw: "pass"
    });userinfo.save();
}