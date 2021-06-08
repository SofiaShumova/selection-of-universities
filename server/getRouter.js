const { Router } = require('express');

function getRouter(model, get) {
  const router = Router();

  router.get(
    '/',
    get
      ? get
      : async (req, res) => {
          try {
            const items = await model.find({});
            res.status(200).json(items);
          } catch (error) {
            res
              .status(500)
              .json({
                message: 'Что-то пошло не так, попробуйте снова',
                error,
              });
          }
        }
  );

  router.post('/', async (req, res) => {
    try {
      const item = new model(req.body);
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
      await model.findOneAndUpdate({ _id: req.params.id }, req.body);

      res.sendStatus(200);
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Что-то пошло не так, попробуйте снова', error });
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      await model.findByIdAndDelete({ _id: req.params.id });
      res.sendStatus(200);
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Что-то пошло не так, попробуйте снова', error });
    }
  });
  return router;
}
module.exports = getRouter;
