const painting = require('../controllers/painting.controller')
const upload = require('../middleware/multer')
require('../config/cloudinary.config')

module.exports = () =>{
    const router = require('express').Router()

    router.get('/api/paintings', painting.findAll)
    router.post('/api/paintings/save',upload.single('image'),painting.createImage)
}