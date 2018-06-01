var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserInfoModel = new Schema(
    {
        useraccount: {type: String},            //useraccount
        userpassword: {type: String},           //userpassword
        confirmpw: {type: String}               //confirmpw

    }
);

var UserInfoModel = mongoose.model('UserInfoModel', UserInfoModel);

module.exports = UserInfoModel;