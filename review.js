var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Review = new Schema(
    {
        restaurant_name:{type: String, required: true, max:100},  //餐厅名
        user_account:{type: String, required: true, max:100},     //评论账户
        review_time:{type: String, required: true, max:100},      //评论时间
        review_detail:{type: String, required: true, max:1000},   //评论详情
        rank_score:{type: Number, required: true, max:100},       //给分
        image1:{type: String, required: true, max:100},            //第一张图
        image2:{type: String, required: true, max:100},            //第二张图
        whatever: {type: String} //any other field
    }
);

var reviewModel = mongoose.model('Review', Review );

module.exports = reviewModel;