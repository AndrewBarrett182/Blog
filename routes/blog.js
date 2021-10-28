const express = require('express');

const router = express.Router();
const fs = require('fs');

function blog(req, res) {
  const blogs = [];
  const filenames = fs.readdirSync('./blogs/');
  filenames.forEach((file) => {
    fs.readFile(`./blogs/${file}`, 'utf8', (err, data) => {
      const title = file.toUpperCase().replace('_', ' ').split('.');
      title.pop();
      blogs.push({
        content: data,
        name: title,
        date: new Date().toLocaleDateString(),
      });
    });
  });
  res.render('blog', { blog: blogs });
}

/* GET home page. */
router.get('/', blog);

module.exports = router;
