const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const ENV = require('dotenv')
ENV.config()

const saltrounds = Number(process.env.SALTROUNDS)

const dbName = process.env.DB_NAME
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true })

mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)

const schema = mongoose.Schema

let UserSchema = new schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

UserSchema.pre('save', function(next) {
    var user = this
    
    if (!user.isModified('password')) {
        return next()
    } else {
        bcrypt.genSalt(saltrounds, function(err, salt) {
            if (err) {
                return next(err)
            } else {
                bcrypt.hash(user.password, salt, function(err, hash) {
                    if (err) {
                        return next(err)
                    } else {
                        user.password = hash
                        next()
                    }
                })
            }
        })
    }
})

var Users = mongoose.model('Users', UserSchema)






module.exports = Users