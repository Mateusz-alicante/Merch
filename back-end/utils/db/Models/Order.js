const mongoose = require('mongoose');


const OrderSchema = new mongoose.Schema({
    order: Array,
    author: Object,
    authorData: Object,
    amount: Number,
    status: {
        type: String,
        default: "InProgress"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Order = mongoose.model('Order', OrderSchema)

module.exports = Order