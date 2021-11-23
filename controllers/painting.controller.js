const db = require('../models')

const Painting = db.Painting

exports.findAll = (req,res) => {
    Painting.find().then(data=>{
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || 'Error occurred while retrieving files'
        })
    })
}

exports.createImage = (req,res) => {
    const painting = new Painting({
        title: req.body.title,
        artist: req.body.user,
        cloudinaryID: req.file.url,
        dataURL: req.body.dataURL,
        published: true,
        favs: 0
    })
    painting.save(painting)
    .then(data => {
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message || 'An error occurred while saving this painting'
        })
    })
}