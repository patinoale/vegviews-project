const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

router.get('/', reviewsCtrl.index);
router.get('/new', isLoggedIn, reviewsCtrl.new);
router.post('/', isLoggedIn, reviewsCtrl.create);
router.get('/:id', isLoggedIn, reviewsCtrl.show);
router.delete('/:id', isLoggedIn, reviewsCtrl.delete);
router.put('/:id', isLoggedIn, reviewsCtrl.update);
router.get('/:id/edit', isLoggedIn, reviewsCtrl.edit);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google')
};

module.exports = router;