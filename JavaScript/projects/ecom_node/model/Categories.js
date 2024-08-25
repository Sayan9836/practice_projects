const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
   
    name: {
        type: 'String',
        required: [true, 'category name is required'],
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    }
})


module.exports = mongoose.model('Categories',categorySchema);