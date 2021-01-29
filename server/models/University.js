const { Schema, model } = require('mongoose');

const universitySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    city: {
        type: Schema.Types.ObjectId,
        ref: 'City',
    },
    description: {
        type: String,
        required: false,
    },
    yearOfFoundation: {
        type: Number,
        required: false,
    },
});

exports.University = model('University', universitySchema);