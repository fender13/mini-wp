const model = require('../models/user')
const ENV = require('dotenv')
ENV.config()

const comparePassword = require('../helpers/comparePassword')

const jwt = require('jsonwebtoken')

class UserController {
    static userRegister(req, res) {
        const { username, email, password } = req.body
        model.create({
            username: username,
            email: email,
            password: password
        })
        .then(function(data) {
            res.status(210).json(data)
        })
        .catch(function(e) {
            res.status(500).json({
                message: e.message
            })
        })
    }

    static userLogin(req, res) {
        const { username, password } = req. body
        let dataUser
        model.findOne({
            username: username
        })
        .then(function(user) {
            dataUser = user
            if (!user) {
                res.status(400).json({
                    message: 'EMAIL ATAU PASSWORD ANDA SALAH'
                })
            } else {
                return comparePassword(password, dataUser.password)
            }
        })
        .then(function(result) {
            if (!result) {
                res.status(400).json({
                    message: 'EMAIL ATAU PASSWORD ANDA SALAH'
                })
            } else {
                const payload = {
                    id: dataUser._id,
                    email: dataUser.username
                }
                const token = jwt.sign(payload, process.env.JWT_SECRET)
                res.status(200).json({
                    token: token
                })
            }
        })
        .catch(function(e) {
            res.status(500).json({
                error: e.message
            })
        })
    }
}

module.exports = UserController