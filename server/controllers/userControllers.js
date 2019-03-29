const model = require('../models/user')
const jwt = require('jsonwebtoken')
const comparePassword = require('../helpers/comparePassword')

const ENV = require('dotenv')
ENV.config()

class UserController {
    static userRegister(req, res) {
        const { firstName, lastName, email, username, password } = req.body
        model
            .create({
                firstName: firstName,
                lastName: lastName,
                email: email,
                username: username,
                password: password,
                role: 'member'
            })

            .then((data) => {
                res.status(201).json(data)
            })

            .catch((err) => {
                if (err.errors.firstName) {
                    res.status(400).json({
                        error: err.errors.firstName.message
                    })
                } else if (err.errors.lastName) {
                    res.status(400).json({
                        error: err.errors.lastName.message
                    })
                } else if (err.errors.email) {
                    res.status(400).json({
                        error: err.errors.email.message
                    })
                } else if (err.errors.username) {
                    res.status(400).json({
                        error: err.errors.username.message
                    })
                } else if (err.errors.password) {
                    res.status(400).json({
                        error: err.errors.password.message
                    })
                } else {
                    res.status(500).json({
                        error: 'Internal server ERROR!!!'
                    })
                }
            })
    }

    static userLogin(req, res) {
        const { username, password } = req.body
        let user

        if (username == '') {
            return res.status(400).json({
                error: 'Username tidak boleh kosong'
            })
        } else if (password == '') {
            return res.status(400).json({
                error: 'Password tidak boleh kosong'
            })
        }

        model
            .findOne({
                username: username
            })

            .then((data) => {
                if (!data) {
                    res.status(400).json({
                        error: 'Username atau password anda salah'
                    })
                } else {
                    user = data
                    return comparePassword(password, data.password)
                }
            })

            .then((result) => {
                if (!result) {
                    res.status(400).json({
                        error: 'Username atau pasword anda salah'
                    })
                } else {
                    const payload = {
                        id: user._id,
                        username: user.username
                    }

                    let token = jwt.sign(payload, process.env.JWT_SECRET)
                    res.status(200).json({
                        token: token,
                        id: user._id,
                        username: user.username
                    })
                }
            })

            .catch((err) => {
                res.status(500).json({
                    error: 'Internal server ERROR!!!'
                })
            })
    }
    
}

module.exports = UserController