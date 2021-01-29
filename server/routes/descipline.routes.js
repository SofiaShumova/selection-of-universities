const Discipline = require('../models/Discipline');
const { Router } = require('express');
const router = Router();

router.get('/', async(req, res) => {
    try {
        const disciplines = await Discipline.find({});
        res.status(200).json(disciplines);
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
});

router.post('/', async(req, res) => {
    try {
        const discipline = new Discipline(({ name, description } = req.body));
        await discipline.save();
        res.sendStatus(200);
    } catch (e) {
        res.status(500).json(e);
    }
});

router.post('/:id', async(req, res) => {
    try {
        const discipline = await Discipline.findById({ _id: req.params.id });
        const { name, description } = req.body;

        discipline.name = name;
        discipline.description = description;

        await discipline.save();
        res.sendStatus(200);
    } catch (e) {
        res.status(500).json(e);
    }
});

router.delete('/:id', async(req, res) => {
    try {
        await Discipline.findByIdAndDelete({ _id: req.params.id });
        res.sendStatus(200);
    } catch (e) {
        res.status(500).json(e);
    }
});
module.exports = router;