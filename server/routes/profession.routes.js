const Profession = require('../models/Profession');
const { Router } = require('express');
const router = Router();

router.get('/', async(req, res) => {
    try {
        const profession = await Profession.find({});
        res.status(200).json(profession);
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
});

router.post('/', async(req, res) => {
    try {
        const profession = new Profession(({ name, description } = req.body));
        await profession.save();
        res.sendStatus(200);
    } catch (e) {
        res.status(500).json(e);
    }
});

router.post('/:id', async(req, res) => {
    try {
        const profession = await Profession.findById({ _id: req.params.id });
        const { name, description } = req.body;

        profession.name = name;
        profession.description = description;

        await profession.save();
        res.sendStatus(200);
    } catch (e) {
        res.status(500).json(e);
    }
});

router.delete('/:id', async(req, res) => {
    try {
        await Profession.findByIdAndDelete({ _id: req.params.id });
        res.sendStatus(200);
    } catch (e) {
        res.status(500).json(e);
    }
});

module.exports = router;