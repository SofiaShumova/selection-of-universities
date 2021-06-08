const { Schema, model } = require('mongoose');

const roleSchema = new Schema({
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

module.exports = model('Role', roleSchema, 'Role');
