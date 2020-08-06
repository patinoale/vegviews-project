const Review = require('../models/review');

module.exports = {
    new: newReview,
    create,
    index,
    show,
    delete: deleteReview,
    update,
    edit
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
        res.redirect('/reviews');
    });
}

function deleteReview(req, res) {
    Review.findByIdAndDelete(req.params.id, function(err) {
        res.redirect('/reviews');
    });
}

function edit(req, res) {
    Review.findById(req.params.id, function(err, review) {
      res.render(`reviews/edit`, { title:'Edit Review', user: req.user, review });
    });
}

function update(req, res) {
    // Review.findById(req.params.id, function(err, review) {
        Review.update(req.params.id, {$set: {
            title:req.body.title, 
            link:req.body.link, 
            image:req.body.image, 
            opinion:req.body.opinion}})
        // Review.save (function(err) {
        res.redirect(`${req.params.id}`);
        };

