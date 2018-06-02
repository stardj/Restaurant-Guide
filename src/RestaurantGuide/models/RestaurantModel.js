var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RestaurantSchema = new Schema(
    {
        restaurant_name: {type: String},   //restaurant_name
        restaurant_tele: {type: String},   //restaurant_tele
        restaurant_type: {type: String},   //restaurant_type
        cuisine_type: {type: String},      //cuisine_type
        post_code: {type: String},         //post_code
        rank_score: {type: String},        //rank_score
        image1: {type: String},            //image1
        image2: {type: String},             //image2
        user_account: {type: String},              //user_account
        locate_longitude: {type: String},
        locate_latitude: {type: String}
    }
);

var RestaurantModel = mongoose.model('Restaurant', RestaurantSchema, 'Restaurant');//avoid adding 's' to model

module.exports = RestaurantModel;