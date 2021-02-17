const { Schema, model } = require('mongoose');

const typeSchema = new Schema({
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
module.exports = model('Type', typeSchema, 'Type');