var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'This is home page' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'This is About Us' });
});

router.get('/contactus', function(req, res, next) {
  res.render('contactus', { title: 'This is Contact us' });
});

router.post('/save_contact', function(req, res, next) {
  console.log(req.body);
  res.render('contact_submit', { title: 'contact form submitted.',data: req });
});


module.exports = router;
