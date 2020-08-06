const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

router.post('/reviews/:id/comments', commentsCtrl.create);
router.delete('/reviews/:id/:commentId', commentsCtrl.delete);

module.exports = router;