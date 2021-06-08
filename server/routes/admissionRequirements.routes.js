const AdmissionRequirements = require('../models/AdmissionRequirements');
const { Router } = require('express');
// const { model } = require('mongoose');
const model = AdmissionRequirements;
const router = Router();
router.get('/', async (req, res) => {
  try {
    const items = await AdmissionRequirements.find({})
      .populate('university')
      .populate('trainingProgram')
      .populate('levelOfPreparation')
      .populate('basisOfLearning')
      .populate('formOfEducation')
      .populate('disciplines.discipline');
    res.status(200).json(items);
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    console.log(e);
  }
});

router.post('/', async (req, res) => {
  try {
    const item = new model(req.body);
    await item.save();
    res.sendStatus(200);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.post('/:id', async (req, res) => {
  try {
    await model.findOneAndUpdate({ _id: req.params.id }, req.body);

    res.sendStatus(200);
  } catch (e) {
    res.status(500).json(e);
    console.log(e);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await model.findByIdAndDelete({ _id: req.params.id });
    res.sendStatus(200);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
