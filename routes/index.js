const express = require('express')
const router = express.Router()
const Book = require('../models/Book.js')

router.get('/', (req, res) => {
    if (req.query.status == 'topSell') {
        Book.find({
            topSell: true
        }).then(result => {
            res.json(result)            
        }).catch(err => {
            console.error(err)
        })
    }
    if (req.query.status == 'recommend') {
        Book.find({
            recommend: true
        }).then(result => {
            res.json(result)            
        }).catch(err => {
            console.error(err)
        })
    } 
    if (req.query.status == 'all') {
        Book.find().sort({
            createAt: -1
        }).limit(5).then(result => {
            res.json(result)            
        }).catch(err => {
            console.error(err)
        })
    } else {
        res.send('Yo')
    }
})

router.get('/book', (req, res) => {
    if (req.query.status == 'topSell') {
        Book.find({
            topSell: true
        }).then(result => {
            res.json(result)            
        }).catch(err => {
            console.error(err)
        })
    }
    if (req.query.status == 'recommend') {
        Book.find({
            recommend: true
        }).then(result => {
            res.json(result)            
        }).catch(err => {
            console.error(err)
        })
    } 
    if (req.query.status == 'all') {
        Book.find().sort({
            createAt: -1
        }).then(result => {
            res.json(result)            
        }).catch(err => {
            console.error(err)
        })
    } else {
        res.send('Yo')
    }
})

router.get('/book/:id', (req, res) => {
    Book.findOne({
        _id: req.params.id
    }).then(result => {
        res.json(result)
    }).catch(err => {
        console.error(err)
    })
})

module.exports = router