const express = require('express');

const router = express.Router();

function home(req, res) {
  res.render('home');
}

router.get('/', home);

module.exports = router;
