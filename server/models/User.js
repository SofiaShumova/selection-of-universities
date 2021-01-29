const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    city: {
        type: { type: Types.ObjectId, ref: 'typeUser' },
        required: false,
    },
    isAdmin: { type: Boolean, default: false, required: true },
    isExpert: { type: Boolean, default: false, required: true },
});

const User = model('User', userSchema);

exports.User = User;