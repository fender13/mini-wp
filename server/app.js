const express = require('express')
const app = express()
const cors = require('cors')

// dotenv
const ENV = require('dotenv')
ENV.config()

// port
const port = Number(process.env.PORT)

// bodyparser
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// home
app.get('/', (req, res) => {

})

const userRouters = require('./routers/userRouter')

// express set router
app.use('/users', userRouters)

// no page found
app.get('*', (req, res) => {
    res.status(404).json({
        message: "PAGE NOT FOUND"
    })
})

app.listen(port, () => [
    console.log('SERVER IS ON AND LISTEN TO PORT ', port)
])