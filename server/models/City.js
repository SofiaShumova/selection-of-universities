const { Schema, model } = require('mongoose');

const citySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: false,
    },
});

module.exports = model('City', citySchema, 'City');