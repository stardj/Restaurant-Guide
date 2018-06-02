var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserInfoSchema = new Schema(
    {
        useraccount: {type: String},            //useraccount
        userpassword: {type: String},           //userpassword
        confirmpw: {type: String}               //confirmpw

    }
);

var UserInfoModel = mongoose.model('UserInfo', UserInfoSchema, 'UserInfo');//avoid adding 's' to model

module.exports = UserInfoModel;