const mongoose = require('mongoose')

const BookSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    detail: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    showStatus: {
        type: Boolean,
        default: true,
        required: true
    },
    score: {
        type: Number,
        default: 0,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    topSell: {
        type: Boolean,
        required: true,
        default: false
    },
    recommend: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('Book', BookSchema)