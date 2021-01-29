const { Schema, model } = require('mongoose');

const citySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
});

module.exports = model('City', citySchema, 'City');