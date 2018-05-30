var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Restaurant = new Schema(
    {
        restaurant_name:{type: String},   //餐厅名
        restaurant_tele:{type: String},   //餐厅电话
        class_name:{type: String},        //餐厅类型（中餐、意大利餐）
        special_name:{type: String},      //菜系（面条、咖喱）
        locate_longitude:{type: String},  //经度
        locate_latitude:{type: String},   //纬度
        post_code:{type: String},         //邮编
        rank_score:{type: String},        //评分
        image1:{type: String},            //第一张图
        image2:{type: String},            //第二张图
    }
);

var RestaurantModel = mongoose.model('Restaurant', Restaurant );

module.exports = RestaurantModel;