const multer = require('multer')
const cloudinary = require('cloudinary')
const { CloudinaryStorage } = require('multer-storage-cloudinary')

const storage = new CloudinaryStorage({
    folder: 'PaintAppGallery',
    // allowedFormats: ['jpg', 'png'],
    // transformation: [{
    //     width: 500,
    //     height: 500,
    //     crop: 'limit'
    // }],
    cloudinary: cloudinary
})

module.exports = multer({storage: storage});