const Category = require('../models/Category');
const { Router } = require('express');
const router = Router();

router.get('/', async(req, res) => {
    try {
        const category = await Category.find({}).populate('criterions');
        res.status(200).json(category);
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
});

router.post('/', async(req, res) => {
    try {
        const program = new Category(
            ({ name, description, criterions } = req.body)
        );
        await program.save();
        res.sendStatus(200);
    } catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
});

router.post('/:id', async(req, res) => {
    try {
        const { name, description, criterions } = req.body;
        await Category.findOneAndUpdate({ _id: req.params.id }, { name, description, criterions });

        res.sendStatus(200);
    } catch (e) {
        res.status(500).json(e);
    }
});

router.delete('/:id', async(req, res) => {
    try {
        await Category.findByIdAndDelete({ _id: req.params.id });
        res.sendStatus(200);
    } catch (e) {
        res.status(500).json(e);
    }
});

module.exports = router;