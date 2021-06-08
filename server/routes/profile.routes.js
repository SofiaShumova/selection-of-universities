const { Router } = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('./models/User');

const router = Router();

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {}
);

router.post('/', (req, res) => {});

module.exports = router;
