const { Schema, model } = require('mongoose');

const formSchema = new Schema({
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
module.exports = model('FormOfEducation', formSchema, 'FormOfEducation');