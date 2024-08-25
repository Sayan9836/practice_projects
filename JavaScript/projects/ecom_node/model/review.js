const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },

    prodId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },

    comment: {
        type: String,
        maxLength: [500,'Comment cannot exceed 500 characters']
    },

    timeStamp: {
        type: Date,
        default: Date.now()
    },

    rating: {
        type: Number,
        min: [1,'Rating must be at least 1'],
        max:[5,'Rating cannot exceed 5'],
    },

})

module.exports = mongoose.model('Review',reviewSchema);