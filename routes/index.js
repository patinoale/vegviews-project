const express = require('express');
const router = express.Router();
const passport = require('passport');
const indexCtrl = require('../controllers/index');


router.get('/', function(req, res, next) {
    res.redirect('/reviews');
});

router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
  ));

  router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect : '/reviews',
      failureRedirect : '/'
    }
  ));

  router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

module.exports = router;