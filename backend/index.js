const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const {MONGO_URL} = require('./keys')
require('./models/User')

const adminRoutes = require('./routes/admin')
const userRoutes = require('./routes/user')
const requireToken = require('./middleware/requireToken')

const PORT = 7777
app.use(bodyparser.json())

app.use(userRoutes)
app.use(adminRoutes)

mongoose.connect(MONGO_URL).then(res => {
    console.log("Mongo Running")
}).catch(error => {
    console.log(error)
})

app.listen(PORT,() => {
    console.log('Server running')
})