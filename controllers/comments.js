const Review = require('../models/review');

module.exports = {
 create,
 delete: deleteComment
};

function create(req, res) {
    Review.findById(req.params.id, function(err, review) {
      review.comments.push(req.body);
      review.save(function(err) {
        console.log('hi');
        res.redirect(`/reviews/${review._id}`);
      });
    });
   }

// function deleteComment(req, res) {
//     Comment.findOne({'comments._id': req.params.id}, function(err, review) {
//       const commentSubdoc = review.comments.id(req.params.id);
//       commentSubdoc.remove();
//       review.save(function(err) {
//         res.redirect(`/reviews/${review._id}`);
//     });
//   });
// }

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
