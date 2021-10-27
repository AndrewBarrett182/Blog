var express = require('express');
var router = express.Router();

function blogs(req, res, next) {
  title = id.replace('%20', ' ')
  res.render('showBlogs', {title: title});
}

function blogs2(req, res, next) {
  title = id2.replace('%20', ' ')
  res.render('showBlogs', {title: title});
}

function blogs3(req, res, next) {
  title = id3.replace('%20', ' ')
  res.render('showBlogs', {title: title});
}

id = "IDC"
router.get('/'+id, blogs)

id2 = "TEACHING%20CODE"
router.get('/'+id2, blogs2)

id3 = "MILESTONES"
router.get('/'+id3, blogs3)

module.exports = router;