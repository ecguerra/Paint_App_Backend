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