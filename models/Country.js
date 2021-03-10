const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    country: {type: String},
    password: {type: String},
    capital: {type: String},
    lat: {type: Number},
    lon: {type: Number},
    img_source: {type:String},
    video_source: {type: String},
    description: {type: String},
    sigths: {type: Array}
});

module.exports = model('Country', schema);
