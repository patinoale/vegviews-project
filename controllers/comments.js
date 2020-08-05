const Review = require('../models/review');

module.exports = {
 create,
};

function create(req, res) {
    Review.findById(req.params.id, function(err, review) {
      review.comments.push(req.body);
      review.save(function(err) {
        res.redirect(`/reviews/${review._id}`);
      });
    });
   }

