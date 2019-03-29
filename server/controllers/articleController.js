const model = require('../models/article')
const jwt = require('jsonwebtoken')

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

    static findOne(req, res) {
        const id = req.params.id
        const getId = { _id: id }
        model.findOne(getId)
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                res.status(500).json({
                    error: 'Internal Server Error'
                })
            })
    }

    static deletePost(req, res) {
        const id = req.params.id
        let decode = jwt.decode(req.headers.token) 
        const getId = { _id: id }
        
        model.findOne(getId)
            .then(function(data) {
                if (data.UserId != decode.id) {
                    throw new Error ('DILARANG MENGHAPUS DATA ORANG LAIN')
                } else {
                    return model.findByIdAndDelete(getId)
                }
            })

            .then(function(data) {
                res.status(200).json(data)
            })

            .catch(function(e) {
                res.status(500).json({
                    error: e.message
                })
            })
    }
}

module.exports = Article