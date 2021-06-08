const jwt = require('jsonwebtoken');
const { Router } = require('express');

const User = require('../models/User');

const router = Router();
router.get('/', (req, res) => {});

router.post('/', async (req, res) => {
  try {
    const { login, password } = req.body;
    const user = await User.findOne({ email: login })
      .populate('role')
      .populate('city');
    if (!user)
      return res
        .status(404)
        .json({ message: 'Пользователь с таким e-mail не найден!' });

    if (User.comparePasswords(password, user.password)) {
      const token = jwt.sign(
        JSON.stringify(user),
        process.env.ACCESS_TOKEN_SECRET
      );
      return res.status(200).json({ user, token });
    }

    res.status(400).json({ message: 'Неверный пароль!' });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
});

module.exports = router;
