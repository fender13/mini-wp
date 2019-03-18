const router = require('express').Router()
const ENV = require('dotenv')
ENV.config()
const jwt = require('jsonwebtoken')
const modelArticle = require('../models/article')
const controller = require('../controllers/articleController')
const gcsMiddlewares = require('../middlewares/google-cloud-storage')
const Multer = require('multer')

const multer = Multer({
    storage: Multer.MemoryStorage,
    limits: {
        fileSize: 10 * 1024 * 1024, // Maximum file size is 10MB
    }
})

// add new post
router.post('/upload', multer.single('image'), gcsMiddlewares.sendUploadToGCS, (req, res, next) => {
    const { title, tags, content, token } = req.body
    const decode = jwt.verify(token, process.env.JWT_SECRET)

    let url = ''
    if (req.file && req.file.gcsUrl) {
        url = req.file.gcsUrl
        res.send(req.file.gcsUrl);
    } else {
        res.status(500).send('Unable to upload');
    }
    modelArticle.create({
        title: title,
        tags: tags,
        content: content,
        author: decode.id,
        featured_image: url
    })
    .then(function(article) {
        res.status(201).json(article)
    })
    .catch(function(e) {
        res.status(500).json({
            message: e.message
        })
    })
})

// get all article
router.get('/', controller.getAllArticle)

module.exports = router