const LevelOfPreparation = require('../models/LevelOfPreparation');
const { Router } = require('express');
const router = Router();

router.get('/', async(req, res) => {
    try {
        const level = await LevelOfPreparation.find({});
        res.status(200).json(level);
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
});

router.post('/', async(req, res) => {
    try {
        const level = new LevelOfPreparation(({ name, description } = req.body));
        await level.save();
        res.sendStatus(200);
    } catch (e) {
        res.status(500).json(e);
    }
});

router.post('/:id', async(req, res) => {
    try {
        const level = await LevelOfPreparation.findById({ _id: req.params.id });
        const { name, description } = req.body;

        level.name = name;
        level.description = description;

        await level.save();
        res.sendStatus(200);
    } catch (e) {
        res.status(500).json(e);
    }
});

router.delete('/:id', async(req, res) => {
    try {
        await LevelOfPreparation.findByIdAndDelete({ _id: req.params.id });
        res.sendStatus(200);
    } catch (e) {
        res.status(500).json(e);
    }
});
module.exports = router;