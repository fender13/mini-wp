const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const ENV = require('dotenv')
ENV.config()

const saltrounds = Number(process.env.SALTROUNDS)

const dbName = process.env.DB_NAME
mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@${dbName}-t5ed5.mongodb.net/test?retryWrites=true`, { useNewUrlParser: true })

const schema = mongoose.Schema

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return re.test(email)
}

const UserSchema = new schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }, 
    password: {
        type: String,
        require: true
    }
})

UserSchema.pre('save', function(next) {
    var user = this
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next()
    // generate a salt
    bcrypt.genSalt(saltrounds, function(err, salt) {
        if (err) return next(err)
        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err)
            // override the cleartext password with the hashed one
            user.password = hash
            next()
        })
    })
})

UserSchema.path('username').validate(function (value, respond) {
    return mongoose
        .model('Users')
        .collection
        .countDocuments({ username: value })
        .then(function (count) {
            return !count
        })
        .catch(function (err) {
            throw err
        })
}, 'Username already exists.')

UserSchema.path('email').validate(function (value, respond) {
    return mongoose
        .model('Users')
        .collection
        .countDocuments({ email: value })
        .then(function (count) {
            return !count
        })
        .catch(function (err) {
            throw err
        })
}, 'Email already exists.')

var Users = mongoose.model('Users', UserSchema)

module.exports = Users