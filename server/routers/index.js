const router = require('express').Router()
const controller = require('../controllers/userControllers')
const authentication = require('../middlewares/authentication')
const jwt = require('jsonwebtoken')

const ENV = require('dotenv')
ENV.config()

// register a user
router.post('/sign-up', controller.userRegister)

// user a login
router.post('/sign-in', controller.userLogin)

// verify if token already exist
router.get('/verify', authentication, (req, res) => {
    let decoded = jwt.verify(req.headers.token, process.env.JWT_SECRET)
    res.status(200).json({
        message: 'User is verified',
        username: decoded.username
    })
})


module.exports = router