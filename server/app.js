const express = require('express')
const app = express()
const cors = require('cors')

// router
const userRouter = require('./routers/userRouter')
const articleRouter = require('./routers/articleRouter')

// dotenv
const ENV = require('dotenv')
ENV.config()

// port
const port = Number(process.env.PORT)

// body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

// router set
app.use('/user', userRouter)
app.use('/article', articleRouter)

// get page not found
app.get('*', (req, res) => {
    res.status(404).json({
        message: 'PAGE NOT FOUND'
    })
})

// app listen
app.listen(port, () => {
    console.log('SERVER IS ON AND LISTEN TO PORT', port)
})