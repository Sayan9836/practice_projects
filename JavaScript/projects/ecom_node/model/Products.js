const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'product name is required'],
    },

    description: {
        type: String,
        required: [true, 'product description is required'],
    },

    price: {
        type: String,
        required: [true, 'product price is required'],
    },

    image: {
        type: String,
        required: [true, 'image is required'],
    },

    stock: {
        type: Number,
        required: [true, "Number of available items is required"]
    },

    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review',
        }
    ],

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },

    additionalImages: [
        {
            type: String,
        }
    ],

    tags: [
        {
            type: String,
        }
    ]

})


module.exports = mongoose.model('Product', productSchema)