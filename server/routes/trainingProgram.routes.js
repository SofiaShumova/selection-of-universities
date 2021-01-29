const TrainingProgram = require('../models/TrainingProgram');
const { Router } = require('express');
const router = Router();

router.get('/', async(req, res) => {
    try {
        const program = await TrainingProgram.find({}).populate('professions');
        res.status(200).json(program);
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
});

router.post('/', async(req, res) => {
    try {
        const program = new TrainingProgram(
            ({ name, description, professions } = req.body)
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
        const { name, description, professions } = req.body;
        await TrainingProgram.findOneAndUpdate({ _id: req.params.id }, { name, description, professions });

        res.sendStatus(200);
    } catch (e) {
        res.status(500).json(e);
    }
});

router.delete('/:id', async(req, res) => {
    try {
        await TrainingProgram.findByIdAndDelete({ _id: req.params.id });
        res.sendStatus(200);
    } catch (e) {
        res.status(500).json(e);
    }
});

module.exports = router;