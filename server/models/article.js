const mongoose = require('mongoose')

const ENV = require('dotenv')
ENV.config()

const dbName = process.env.DB_NAME
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true })

mongoose.set('useFindAndModify', false)

const schema = mongoose.Schema

const ArticleSchema = new schema({
    title: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    UserId: {
        type: schema.Types.ObjectId,
        reff: 'Users'
    },
    featured_image: {
        type: String,
        required: true
    }
})

ArticleSchema.path('title').validate(function (value, respond) {
    return mongoose
        .model('Articles')
        .collection
        .countDocuments({ title: value })
        .then(function (count) {
            return !count
        })
        .catch(function (err) {
            throw err
        })
}, 'Title already exists.')

var Articles = mongoose.model('Articles', ArticleSchema)

module.exports = Articles