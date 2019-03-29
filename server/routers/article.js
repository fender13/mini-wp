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
    } else {
        throw new Error ('Unable to upload');
    }
    modelArticle.create({
        title: title,
        content: content,
        UserId: decode.id,
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

// get one article
router.get('/findOne/:id', controller.findOne)

// delete one post
router.delete('/:id', controller.deletePost)

// update post
router.put('/upload/:id', multer.single('image'), gcsMiddlewares.sendUploadToGCS, (req, res, next) => {
    const { title, content, token } = req.body
    const id = req.params.id
    let decode = jwt.decode(req.headers.token) 
    const getId = { _id: id }

    let url = ''
    if (req.file && req.file.gcsUrl) {
        url = req.file.gcsUrl
    } else {
        throw new Error ('Unable to upload');
    }

    modelArticle.findOne(getId)
    .then((data) => {
        if (data.UserId != decode.id) {
            throw new Error ('DILARANG UPDATE PUNYA ORANG LAIN')
        } else {
            return modelArticle.findOneAndUpdate(getId, {
                title: title,
                content: content,
                UserId: decode.id,
                featured_image: url
            })
        }
    })
    .then(function(data) {
        res.status(201).json(data)
    })
    .catch(function(e) {
        res.status(400).json({
            e
        })
    })
})

module.exports = router