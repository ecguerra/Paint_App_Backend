const express = require('express')
const bodyParser = require('body-parser')
const dbConfig = require('./config/db.config')
const cors = require('cors')
const PORT = process.env.PORT || 8080

const app = express()

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const db = require('./models/index')
const Role = db.role

db.mongoose
    .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> {
        console.log('Successfully connected to MongoDB')
        initial()
    })
    .catch(err => {
        console.error('Connection error', err)
        process.exit
    })

app.get('/',(req,res)=>{
    res.json({message: 'Here we are in the future!'})
})

// import the user and admin routes
require('./routes/auth.routes')(app)
require('./routes/user.routes')(app)
require('./routes/painting.routes')(app)

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})

function initial(){
    Role.estimatedDocumentCount((err, count)=>{
        // if no roles are present, create new roles (admin and user)
        if(!err && count === 0){
            new Role({
                name: 'user'
            }).save(err => {
                if(err) {
                    console.log('error',err)
                }
                console.log('added users to roles collection')
            })

            new Role({
                name: 'admin'
            }).save(err => {
                if(err) {
                    console.log('error',err)
                }
                console.log('added admin to roles collection')
            })
        }
    })
}