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
  phone: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  yearOfFoundation: {
    type: Number,
    required: false,
  },
  type: {
    type: Schema.Types.ObjectId,
    ref: 'Type',
  },
  militaryDepartment: {
    type: Boolean,
    required: false,
  },
  dormitory: {
    type: Boolean,
    required: false,
  },
  site: {
    type: String,
    required: false,
  },
});

module.exports = model('University', universitySchema, 'University');
