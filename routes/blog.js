var express = require('express');
var router = express.Router();
var fs = require('fs');

function blog(req, res, next) {
  const blogs = []
  let filenames = fs.readdirSync("./blogs/");
  filenames.forEach((file) => {
    fs.readFile("./blogs/"+file, 'utf8', function(err, data) {
      var title = file.toUpperCase().replace('_', ' ').split('.')
      title.pop()
      blogs.push({
        content: data,
        name: title,
        date: new Date().toLocaleDateString()
      })
    })
  });
  res.render('blog', { blog: blogs });
}

/* GET home page. */
router.get('/', blog);

module.exports = router;