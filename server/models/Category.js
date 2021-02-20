const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: false,
    },
    criterions: [{ type: Schema.Types.ObjectId, ref: 'Criterion' }],
});
module.exports = model('Category', categorySchema, 'Category');