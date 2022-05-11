const mongoose = require('mongoose')
require('dotenv').config()

module.exports = mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}, () => {
    console.log('connected to DB')
})
