const { Schema, model } = require('mongoose');

const basisSchema = new Schema({
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
module.exports = model('BasisOfLearning', basisSchema, 'BasisOfLearning');