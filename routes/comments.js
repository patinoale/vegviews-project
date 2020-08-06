const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

router.post('/reviews/:id/comments', isLoggedIn, commentsCtrl.create); //*
router.delete('/reviews/:id/:commentId', isLoggedIn, commentsCtrl.delete); //*

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google')
}; //*

module.exports = router;