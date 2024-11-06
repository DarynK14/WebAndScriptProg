var express = require('express');
var router = express.Router();


router.get("*", (req,res) => {
  res.sendFile(path.resolve(__dirname, "build", "home.ejs"))
})

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { 
    title: 'Home' 
  });
});

/* GET about me page. */
router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { 
    title: 'About Me' 
  });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { 
    title: 'Projects' 
  });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { 
    title: 'Contact Us' 
  });
});

module.exports = router;
