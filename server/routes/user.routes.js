const User = require('../models/User');
const Analysis = require('../models/Analysis');

const { Router } = require('express');

const router = Router({ strict: true });

router.get('/', async (req, res) => {
  try {
    const items = await User.find({}).populate('city').populate('analysis');
    res.status(200).json(items);
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    console.log(e);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const item = await User.findOne({ _id: req.params.id })
      .populate('city')
      .populate('role');

    for (let i = 0; i < item.analysis.length; i++) {
      const id = item.analysis[i];
      item.analysis[i] = await Analysis.findOne({ _id: id });
    }
    console.log(item.analysis);

    res.status(200).json(item);
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    console.log(e);
  }
});

router.post('/', async (req, res) => {
  try {
    const item = new User(req.body);
    await item.save();
    res.sendStatus(200);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Что-то пошло не так, попробуйте снова', error });
  }
});

router.post('/:id', async (req, res) => {
  try {
    await User.findOneAndUpdate({ _id: req.params.id }, req.body);

    res.sendStatus(200);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Что-то пошло не так, попробуйте снова', error });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ ok: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Что-то пошло не так, попробуйте снова', error });
  }
});

router.post('/add-analysis/:id', async (req, res) => {
  try {
    console.log(req.params.id);
    const analysis = new Analysis(req.body);
    await analysis.save();

    const user = await User.findOne({ _id: req.params.id });
    // // const user = await User.findOne({ _id: req.body.user._id });
    user.analysis.push(new Analysis(req.body.analysis));
    await user.save();
    // console.log(req.body);
    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: 'Что-то пошло не так, попробуйте снова', error });
  }
});

module.exports = router;
