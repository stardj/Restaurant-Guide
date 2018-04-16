var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Restaurant = new Schema(
    {
        restaurant_name:{type: String, required: true, max:100},
        class_name:{type: String, required: true, max:100},
        special_name:{type: String, required: true, max:100},
        locate_longitude:{type: String, required: true, max:100},
        locate_latitude:{type: String, required: true, max:100},
        post_code:{type: String, required: true, max:100},
        rank_score:{type: String, required: true, max:100},
        level_score:{type: String, required: true, max:100},
        whatever: {type: String} //any other field
    }
);

var characterModel = mongoose.model('Restaurant', Restaurant );

module.exports = characterModel;