const router = require('express').Router()
const controller = require('../controllers/userControllers')

// create a user
router.post('/register', controller.createUser)

// login user
router.post('/login', controller.loginUser)



module.exports = router