// HANDLE OUR REQ & RES
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyparser = require('body-parser')

// Coonect to the Database
mongoose.connect('mongodb+srv://arunkudiyal:examplepwd@cluster0.2pssb.mongodb.net/cu_21_db?retryWrites=true&w=majority')
    .then(console.log('Connection Successful!'))
    .catch(err => console.error(err))

// MIDDLEWARES
// Adding body-parser as a middleware
app.use(bodyparser.urlencoded( {extended:false} ))
app.use(bodyparser.json())

// Managing your routes
const productRoutes = require('./api/products/products')
app.use('/products', productRoutes)

// Error Handling
app.use( (requset, response) => {
    response.status(404).json( {message: '404, Resource Not found!'} )
} )

module.exports = app;