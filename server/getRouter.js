const { Router } = require('express');

function getRouter(model) {
  const router = Router();

  router.get('/', async (req, res) => {
    try {
      const items = await model.find({});
      res.status(200).json(items);
    } catch (e) {
      res
        .status(500)
        .json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
  });

  router.post('/', async (req, res) => {
    try {
      const item = new model(req.body);
      console.log(req.body);
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
  return router;
}
module.exports = getRouter;
