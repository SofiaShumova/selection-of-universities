const { Schema, model } = require('mongoose');

const criterionSchema = new Schema({
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
module.exports = model('Criterion', criterionSchema, 'Criterion');