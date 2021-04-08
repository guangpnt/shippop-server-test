const express = require('express')
const router = express.Router()
const User = require('../models/User.js')
const Book = require('../models/Book.js')


router.post('/login', (req, res) => {
    User.findOne({
        email : req.body.email,
        password : req.body.password
    }).then(result => {
        if (result) {
            res.json({ email: result.email })
        } else {
            res.json({ err: true })
        }
    }).catch(err => {
        console.error(err)
    })
})

router.post('/register', (req, res) => {
    User.findOne({
        email : req.body.email
    }).then(result => {
        if (result) {
            res.json({ err: true })
        } else {
            const newUser = new User({
                email : req.body.email,
                password : req.body.password
            })
            newUser.save()
            res.json({ success: true })
        }
    }).catch(err => {
        console.error(err)
    })
})

router.get('/book', (req, res) => {
    Book.find({
        email: req.query.email
    }).then(result => {
        res.json(result)
    }).catch(err => {
        console.error(err)
    })
})

router.post('/book', (req, res) => {
    Book.findOne({
        name : req.body.name
    }).then(result => {
        if (result) {
            res.json({ err: true })
        } else {
            const newBook = new Book({
                name: req.body.name,
                detail: req.body.detail,
                price: req.body.price,
                discount: req.body.discount,
                author: req.body.author,
                email: req.body.email
            })
            newBook.save()
            res.json({ success : true })
        }
    }).catch(err => {
        console.error(err)
    })
})

router.get('/book/delete/:id', (req, res) => {
    Book.deleteOne({
        _id: req.params.id
    }, (err) => {
        if (err) {
            res.json({ err : err })
        } else {
            res.json({ success : true })
        }
    })
})

router.get('/book/edit/:id', (req, res) => {
    Book.findOne({
        _id: req.params.id
    }).then(result => {
        res.json(result)
    }).catch(err => {
        console.error(err)
    })
})

router.post('/book/edit/:id', (req, res) => {
    Book.updateOne({
        _id: req.params.id
    }, {
        name: req.body.name,
        detail: req.body.detail,
        price: req.body.price,
        discount: req.body.discount,
        showStatus: req.body.showStatus
    }, (err) => {
        if (err) {
            res.json({ err : err })
        } else {
            res.json({ success : true })
        }
    })
})

module.exports = router