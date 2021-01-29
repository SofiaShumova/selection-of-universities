const { Schema, model } = require('mongoose');

const professionSchema = new Schema({
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
module.exports = model('Profession', professionSchema, 'Profession');