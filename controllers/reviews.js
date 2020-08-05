const Review = require('../models/review');

module.exports = {
    new: newReview,
    create,
    index,
    show
};

function index(req, res) {
    Review.find({}, function(err, reviews) {
        res.render('reviews/index', { title: 'All Reviews', reviews, user: req.user });
    });
}

function show(req, res) {
    Review.findById(req.params.id, function(err, review) {
      res.render('reviews/show', { title: 'Review Detail', review, user: req.user });
    });
  }

function newReview(req, res) {
    res.render('reviews/new', { title: 'Add Review', user: req.user });
}

function create(req, res) {
    const review = new Review(req.body);
    review.save(function(err) {
        if (err) return res.render('reviews/new');
        console.log(review);
        res.redirect('/reviews');
    });
}