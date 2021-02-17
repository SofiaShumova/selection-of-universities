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
    basisOfLearning: {
        type: Schema.Types.ObjectId,
        ref: 'BasisOfLearning',
    },
    numberOfStudents: {
        type: Number,
    },
    trainingDuration: {
        type: Number,
    },
    disciplines: [{
        discipline: { type: Schema.Types.ObjectId, ref: 'Discipline' },
        score: { type: Number },
    }, ],
});
module.exports = model(
    'AdmissionRequirements',
    requirementsSchema,
    'AdmissionRequirements'
);