const mongoose = require('mongoose')
require('dotenv').config()

module.exports = mongoose.connect('mongodb+srv://admin:fPRM9cEm@cluster0.qbaid.mongodb.net/shippop?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}, () => {
    console.log('connected to DB')
})