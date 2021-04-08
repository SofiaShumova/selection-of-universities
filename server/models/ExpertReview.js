const { Schema, model } = require('mongoose');

const expertReviewSchema = new Schema({
  expert: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  description: {
    type: String,
    required: false,
  },
  university: {
    type: Schema.Types.ObjectId,
    ref: 'University',
  },
  result: [
    {
      criterion: { type: Schema.Types.ObjectId, ref: 'Criterion' },
      score: Number,
    },
  ],
});
module.exports = model('ExpertReview', expertReviewSchema, 'ExpertReview');
