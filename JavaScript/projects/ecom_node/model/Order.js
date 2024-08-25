const mongoose = require('mongoose');


const orderItemSchema = new mongoose.Schema({

    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product",
    },

    quantity: {
        type: Number,
        default:1,
    }

})

const OrderSchema = new mongoose.Schema({

    totalAmout: {
        type:'Number',
        required: [true,'totalAmout is required'],
    },

    orderDate: {
        type:Date,
        default:Date.now(),
    },

    status: {
        type: String,
        enum: ['PENDING','CANCELLED','DELIVERED'],
        default: 'PENDING'
    },

    orderItems: {
        type: [orderItemSchema]
    },

    shippingAddress: {
        type: String,
        required:[true,'shippingAddress is required']
    },

    shippingCity: {
        type: String,
        required:[true,'shippingCity is required']
    },

    paymentMethod: {
        type: String,
    },

    user: {
        type:mongoose.Schema.Types.ObjectId, 
        ref: 'User',
    },

    
})

module.exports = mongoose.model('Order', OrderSchema);
