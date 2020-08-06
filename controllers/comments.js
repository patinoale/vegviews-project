const Review = require('../models/review');

module.exports = {
 create,
 delete: deleteComment
};

function create(req, res) {
  req.body.author = req.user._id //*
    Review.findById(req.params.id, function(err, review) {
      review.comments.push(req.body);
      review.save(function(err) {
        res.redirect(`/reviews/${review._id}`);
      });
    });
   }

function deleteComment(req, res) {
  Review.findById(req.params.id, function(err, review ) {
  let commentIdx = null;
  review.comments.forEach(function(comment, idx) {
    if (comment._id == req.params.commentId) {
      commentIdx = idx
    }
  })
  review.comments.splice(commentIdx, 1);
  review.save(function(err){
    res.redirect(`/reviews/${review._id}`);
  });
})
}
