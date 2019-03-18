const router = require('express').Router()
const controller = require('../controllers/userController')
const authentication = require('../middlewares/authentication')

// user register 
router.post('/register', controller.userRegister)

// user login
router.post('/login', controller.userLogin)

// authenticate user
router.get('/verify', authentication, (req, res) => {
    res.status(200).json({
        messager: 'User is verified'
    })
})

module.exports = router