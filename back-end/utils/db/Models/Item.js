const mongoose = require('mongoose');


const ItemSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        minlength: 3,
        required: true
    },
    description: {
        type: String,
        unique: true,
        minlength: 5,
        required: true
    },
    price: {
        type: Number,
        minlength: 1,
        required: true
    },
    thumbnail: {
        type: String,
        minlength: 1,
        required: true
    },
    images: [String],
    visible: {type: Boolean, default: true},
    inStock : {type: Boolean, default: true},
    views: {type: Number, default: 0},
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Item = mongoose.model('Item', ItemSchema)

module.exports = Item