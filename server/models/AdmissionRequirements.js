const { Schema, model } = require('mongoose');

const requirementsSchema = new Schema({
    university: {
        type: Schema.Types.ObjectId,
        ref: 'University',
    },
    trainingProgram: {
        type: Schema.Types.ObjectId,
        ref: 'TrainingProgram',
    },
    levelOfPreparation: {
        type: Schema.Types.ObjectId,
        ref: 'LevelOfPreparation',
    },
    disciplines: [{
        discipline: { type: Schema.Types.ObjectId, ref: 'LevelOfPreparation' },
        score: { type: Number },
    }, ],
});
exports.AdmissionRequirements = model(
    'AdmissionRequirements',
    requirementsSchema
);