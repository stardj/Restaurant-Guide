var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var LocationSchema = new Schema(
    {
        restaurant_id: {type: String, required: true},
        locate_longitude: {type: String},
        locate_latitude: {type: String}
    }
);

var LocationModel = mongoose.model('Location', LocationSchema, 'Location');//avoid adding 's' to model

module.exports = LocationModel;