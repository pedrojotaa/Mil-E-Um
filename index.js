const express = require('express')
const app = express()
const path = require('path')
const apiRouter = require('./routes/api')
const PORT = 3000

app.use('/api', apiRouter)

app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, ()=> console.log(`Server rodando da porta ${PORT}`))