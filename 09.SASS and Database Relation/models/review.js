const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    star: {
        type: Number,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        unique: true
    }
},{
    timestamps: true
})

const Review = mongoose.model('Review',reviewSchema);

module.exports = Review;