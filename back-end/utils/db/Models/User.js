const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        minlength: 3,
        required: true
    },
    email: {
        type: String,
        unique: true,
        minlength: 5,
        required: true
    },
    year: {
        type: String,
        minlength: 1,
        required: true
    },
    section: {
        type: String,
        minlength: 1,
        required: true
    },
    password: {
        type: String,
        minlength: 3,
        required: true
    },
    orders: Array,
    isAdmin: {type: Boolean, default: false},
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const User = mongoose.model('User', userSchema)

module.exports = User