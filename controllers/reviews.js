const Review = require('../models/review');

module.exports = {
    new: newReview,
    create,
    index
};

function index(req, res) {
    Review.find({}, function(err, reviews) {
        res.render('reviews/index', {
            reviews
        });
    });
}

function create(req, res) {
    const review = new Review(req.body);
    review.save(function(err) {
        if (err) return res.render('reviews/new');
        console.log(review);
        res.redirect('/reviews');
    });
}

function newReview(req, res) {
    res.render('reviews/new');
}