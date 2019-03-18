const mongoose = require('mongoose')

const ENV = require('dotenv')
ENV.config()

const dbName = process.env.DB_NAME
mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@${dbName}-t5ed5.mongodb.net/test?retryWrites=true`, { useNewUrlParser: true })

const schema = mongoose.Schema

const ArticleSchema = new schema({
    title: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    author: {
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