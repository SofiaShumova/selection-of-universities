const { Schema, model } = require('mongoose');

const programSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: false,
    },
    professions: [{ type: Schema.Types.ObjectId, ref: 'Profession' }],
});
module.exports = model('TrainingProgram', programSchema, 'TrainingProgram');