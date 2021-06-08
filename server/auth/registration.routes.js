const { Router } = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const Role = require('../models/Role');

const router = Router();

router.post('/', async (req, res) => {
  try {
    const user = req.body;

    if (user.hasOwnProperty('code')) {
      const role = await Role.findOne({ name: user.code });
      if (role) {
        user.role = role;
        delete user.code;
      }
    }

    user.password = User.createPassword(user.password);

    const userDB = await User.create(user);
    await userDB.save();

    res
      .status(200)
      .json({ message: 'Пользователь успешно создан! Выполните вход!' });
  } catch (e) {
    res.status(500).json({
      message: 'Что-то пошло не так, попробуйте снова',
      error: e,
    });
  }
});

module.exports = router;
