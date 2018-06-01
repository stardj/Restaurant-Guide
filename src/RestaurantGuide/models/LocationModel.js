var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Location = new Schema(
    {
        restaurant_id: {type: String, required: true},
        locate_longitude: {type: String},
        locate_latitude: {type: String},

    }
);

var UserCurrentLocationModel = mongoose.model('CurrentLocation', Location);

module.exports = UserCurrentLocationModel;