const ExpertReview = require('../models/ExpertReview');
const getRouter = require('../getRouter');

module.exports = getRouter(ExpertReview, async (req, res) => {
  try {
    const items = await ExpertReview.find({})
      .populate('university')
      .populate('expert');
    res.status(200).json(items);
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    console.log(e);
  }
});
