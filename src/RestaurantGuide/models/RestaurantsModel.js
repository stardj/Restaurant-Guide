var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RestaurantModel = new Schema(
    {
        restaurant_name:{type: String},   //restaurant_name
        restaurant_tele:{type: String},   //restaurant_tele
        class_name:{type: String},        //class_name
        special_name:{type: String},      //special_name
        // locate_longitude:{type: String},  //经度
        // locate_latitude:{type: String},   //纬度
        post_code:{type: String},         //post_code
        rank_score:{type: String},        //rank_score
        image1:{type: String},            //image1
        image2:{type: String}            //image2
    }
);

var RestaurantModel = mongoose.model('RestaurantModel', RestaurantModel );

module.exports = RestaurantModel;