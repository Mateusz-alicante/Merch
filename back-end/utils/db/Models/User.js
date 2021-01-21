const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        minlength: 3
    },
    email: {
        type: String,
        unique: true,
        minlength: 5
    },
    password: String,
    isAdmin: {type: Boolean, default: false},
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const User = mongoose.model('User', userSchema)

module.exports = User