var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserInfo = new Schema(
    {
        useraccount: {type: String},
        userpassword: {type: String},
        confirmpw: {type: String},

    }
);

var UserInfoModel = mongoose.model('UserInfo', UserInfo);

module.exports = UserInfoModel;