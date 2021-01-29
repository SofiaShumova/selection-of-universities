const mongoose = require('mongoose');
const express = require('express');

const url =
    'mongodb+srv://user:123@cluster0.ti9uf.mongodb.net/universitydb?retryWrites=true&w=majority';
const PORT = 5000;

const app = express();

app.use(express.json({ extended: true }));

app.use('/api/discipline', require('./routes/descipline.routes'));
app.use('/api/city', require('./routes/city.routes'));
app.use(
    '/api/level-of-preparation',
    require('./routes/levelOfPreparation.routes')
);
app.use('/api/profession', require('./routes/profession.routes'));
app.use('/api/training-program', require('./routes/trainingProgram.routes'));

mongoose.connect(
    url, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
    },
    (err) => {
        console.log(err || 'Working...');
    }
);
app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
// start();