const { Schema, model } = require('mongoose');

const levelSchema = new Schema({
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
module.exports = model('LevelOfPreparation', levelSchema, 'LevelOfPreparation');