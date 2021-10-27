var express = require('express');
var router = express.Router();

function home(req, res, next) {
  res.render('home');
}

router.get('/', home)

module.exports = router;