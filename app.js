const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()

require('./config/mongoose')

app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())
app.use(cors())

// Routes
app.use('/', require('./routes/index.js'))
app.use('/user', require('./routes/user.js'))

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})