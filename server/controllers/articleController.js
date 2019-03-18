const model = require('../models/article')

class Article {
    static getAllArticle(req, res) {
        model.find()
        .then(function(data) {
            res.status(200).json(data)
        })
        .catch(function(e) {
            res.status(500).json({
                message: e.message
            })
        })
    }
}

module.exports = Article