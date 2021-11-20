const express = require('express')
const router = express.Router()
const posts = require('../model/posts')
const cors = require('cors')

let options = {
    origin: 'http://localhost:3000'
}

router.use(cors(options))

router.get('/all', (req, res) => {
    res.json(JSON.stringify(posts.getAll()))
})

module.exports = router