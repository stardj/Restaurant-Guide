var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Review = new Schema(
    {
        restaurant_name:{type: String},           //餐厅名
        user_account:{type: String},              //评论账户
        review_time:{type: String},               //评论时间
        review_detail:{type: String, max:1024},   //评论详情
        rank_score:{type: Number},                //给分
        image1:{type: String},                    //第一张图
        image2:{type: String},                    //第二张图
    }
);

var ReviewModel = mongoose.model('Review', Review );

module.exports = ReviewModel;