const { Schema, model } = require('mongoose');

const analysisSchema = new Schema({
  result: [
    {
      university: { type: Schema.Types.ObjectId, ref: 'University' },
      procent: Number,
    },
  ],
});
module.exports = model('Analysis', analysisSchema, 'Analysis');
