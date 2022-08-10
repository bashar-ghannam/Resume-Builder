const express = require('express')
const router = express.Router()
const Resume = require('../models/UserInfo')

router.get('/get', (req, res) => {
    Resume.find({}, function(err, data) {
        console.log(data)
        res.send(data)
    })
});

router.post('/save', (req, res) => {
    let data = req.body
    let newItem = new Item(data)
    newItem.save()
})

module.exports = router
