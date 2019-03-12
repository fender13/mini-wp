const jwt = require('jsonwebtoken')
const ENV = require('dotenv')
ENV.config()

module.exports = (req, res, next) => {
    if (req.headers.hasOwnProperty('token')) {
        let decode = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decode)
    } else {
        res.send(400).json({
            message: 'MOHON LOGIN TERLEBIH DAHULU'
        })
    }
}