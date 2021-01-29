const { Schema, model } = require('mongoose');

const disciplineSchema = new Schema({
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
module.exports = model('Discipline', disciplineSchema, 'Discipline');