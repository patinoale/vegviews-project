const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

router.get('/', reviewsCtrl.index);
router.get('/new', reviewsCtrl.new);
router.post('/', reviewsCtrl.create);
router.get('/:id', reviewsCtrl.show);
router.delete('/:id', reviewsCtrl.delete);

module.exports = router;