const University = require('../models/University');
const { Router } = require('express');
const router = Router();

router.get('/', async (req, res) => {
  try {
    const university = await University.find({})
      .populate('type')
      .populate('city');
    res.status(200).json(university);
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
});

router.post('/', async (req, res) => {
  try {
    const university = new University(
      ({
        name,
        description,
        city,
        phone,
        yearOfFoundation,
        type,
        militaryDepartment,
        dormitory,
        site,
      } = req.body)
    );
    await university.save();
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

router.post('/:id', async (req, res) => {
  try {
    const {
      name,
      description,
      city,
      phone,
      yearOfFoundation,
      type,
      militaryDepartment,
      dormitory,
      site,
    } = req.body;

    await University.findOneAndUpdate(
      { _id: req.params.id },
      {
        name,
        description,
        city,
        phone,
        yearOfFoundation,
        type,
        militaryDepartment,
        dormitory,
        site,
      }
    );

    res.sendStatus(200);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await University.findByIdAndDelete({ _id: req.params.id });
    res.sendStatus(200);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
