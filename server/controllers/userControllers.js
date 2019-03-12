const model = require('../models/user')
const jwt = require('jsonwebtoken')
const ENV = require('dotenv')
ENV.config()

const compare = require('../helpers/comparePassword')

class User {
    static createUser(req, res) {
        const { firstName, lastName, email, username, password } = req.body
        model.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            username: username,
            password: password
        })
        .then(function(data) {
            res.status(201).json({
                data
            })
        })
        .catch(function(err) {
            res.status(500).json({
                error: err.message
            })
        })
    }

    static loginUser(req, res) {
        const { username, password } = req.body
        let user
        model.findOne({
            username: username
        })
        .then(function(data) {
            user = data
            if (!data) {
                res.status(404).json({
                    message: 'USERNAME ATAU PASSWORD ANDA SALAH'
                })
            } else {
                return compare(password, data.password)
            }
        })
        .then(function(result) {
            if (!result) {
                res.status(404).json({
                    message: 'USERNAME ATAU PASSWORD ANDA SALAH'
                })
            } else {
                const payload = {
                    id: `${user._id}`,
                    username: user.username
                } 
                const token = jwt.sign(payload, process.env.JWT_SECRET)
                res.status(200).json({
                    token: token
                })
            }
        })
        .catch(function(err) {
            res.status(500).json({
                error: err.message
            })
        })
    }
}

module.exports = User