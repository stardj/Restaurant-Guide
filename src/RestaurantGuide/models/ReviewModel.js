var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Review = new Schema(
    {
        restaurant_name:{type: String},           //restaurant_name
        user_account:{type: String},              //user_account
        review_time:{type: String},               //review_time
        review_detail:{type: String, max:1024},   //review_detail
        rank_score:{type: Number},                //rank_score
        image1:{type: String},                    //image1
        image2:{type: String}                     //image2
    }
);

var ReviewModel = mongoose.model('Review', Review );

module.exports = ReviewModel;