const express = require('express')
const router = express.Router()
const posts = require('../model/posts')

router.get('/all', (req, res) => {
    res.json(JSON.stringify(posts.getAll()))
})

module.exports = router