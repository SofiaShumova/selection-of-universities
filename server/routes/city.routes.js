const City = require('../models/City');
const { Router } = require('express');
const router = Router();

router.get('/', async(req, res) => {
    try {
        const cities = await City.find({});

        res.status(200).json(cities);
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
});

router.post('/', async(req, res) => {
    try {
        const city = new City({ name: req.body.name });
        console.log(city);
        await city.save();
        res.sendStatus(200);
    } catch (e) {
        res.status(500).json(e);
    }
});

router.post('/:id', async(req, res) => {
    try {
        const city = await City.findById({ _id: req.params.id });
        const { name } = req.body;

        city.name = name;

        await city.save();
        res.sendStatus(200);
    } catch (e) {
        res.status(500).json(e);
    }
});

router.delete('/:id', async(req, res) => {
    try {
        await City.findByIdAndDelete({ _id: req.params.id });
        res.sendStatus(200);
    } catch (e) {
        res.status(500).json(e);
    }
});
module.exports = router;