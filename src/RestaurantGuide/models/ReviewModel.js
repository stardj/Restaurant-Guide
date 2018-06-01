var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ReviewSchema = new Schema(
    {
        restaurant_id: {type: String},             //restaurant_id
        user_account: {type: String},              //user_account
        review_time: {type: String},               //review_time
        review_detail: {type: String, max: 1024},   //review_detail
        rank_score: {type: Number},                //rank_score
        image1: {type: String},                    //image1
        image2: {type: String}                     //image2
    }
);

var ReviewModel = mongoose.model('Review', ReviewSchema, 'Review');//avoid adding 's' to model

module.exports = ReviewModel;