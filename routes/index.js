var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  blogs = []
  let filenames = fs.readdirSync("./blogs/");
  filenames.forEach((file) => {
    fs.readFile("./blogs/"+file, 'utf8', function(err, data) {
      blogs.push(data)
    })
  });
  res.render('index', { blog: blogs });
});

module.exports = router;