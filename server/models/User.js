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
    type: Schema.Types.ObjectId,
    ref: 'City',
  },
  role: {
    type: String,
  },
});

const User = model('User', userSchema, 'User');

module.exports = User;
