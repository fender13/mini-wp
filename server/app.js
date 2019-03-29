const express = require('express')
const app = express()
const cors = require('cors')

const ENV = require('dotenv')
ENV.config()

const port = Number(process.env.PORT)

const index = require('./routers/index')
const article = require('./routers/article')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/', index)
app.use('/article', article)

app.listen(port, () => {
    console.log('SERVER IS ON AND IT LISTEN TO PORT', port)
})
