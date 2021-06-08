const bcrypt = require('bcrypt');
const { Schema, model } = require('mongoose');

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
    type: Schema.Types.ObjectId,
    ref: 'Role',
  },
  analysis: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Analysis' }],
    default: [],
  },
});

const User = model('User', userSchema, 'User');
User.comparePasswords = (foundPassword, hash) => {
  return bcrypt.compareSync(foundPassword, hash);
};

User.createPassword = (password) => {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, salt);
};

module.exports = User;
