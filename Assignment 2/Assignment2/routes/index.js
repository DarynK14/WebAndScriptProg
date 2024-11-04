var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'INFR3120U' 
  });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home' 
  });
});

/* GET about me page. */
router.get('/aboutme', function(req, res, next) {
  res.render('index', { 
    title: 'About Me' 
  });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { 
    title: 'Projects' 
  });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { 
    title: 'Contact Us' 
  });
});

module.exports = router;