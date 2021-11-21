const mongoose = require('mongoose')

const User = mongoose.model(
    'User',
    new mongoose.Schema({
        username:String,
        email:String,
        password:String,
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:'Role'
            }
        ],
        paintings:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref: 'Painting'
            }
        ],
        faves:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref: 'Painting'
            }
        ]
    })
)

module.exports = User