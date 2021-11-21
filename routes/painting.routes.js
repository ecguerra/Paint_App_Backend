const painting = require('../controllers/painting.controller')

module.exports = app =>{
    let router = require('express').Router()

    router.get('/', painting.findAll)
}