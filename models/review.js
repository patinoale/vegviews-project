const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
        type: String, 
        required: true
    },
    cRating: {
        type: Number,
        min: 1, 
        max: 5,
        default: 5
    },
    author: {
        type: Schema.Types.ObjectId, ref: 'User'
    }
    }, { timestamps: true });

const reviewSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    opinion: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1, 
        max: 5,
        default: 5
    }, 
    link: String,
    image: String,
    comments: [commentSchema],
    author: {
        type: Schema.Types.ObjectId, ref: 'User'
    }
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);