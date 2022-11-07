// HANDLE OUR REQ & RES
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// Make a MongoDB connectivity using mongoose as ORM (Obj. Relational Mapping)
mongoose.connect(`mongodb+srv://arunkudiyal:examplepwd@cluster0.2pssb.mongodb.net/?retryWrites=true&w=majority`)
    .then( () => console.log('CONNECTION SUCCESSFUL!') )
    .catch( () => console.log('CONNECTION FAILED!') )

// Managing your routes
const productRoutes = require('./api/products/products')
app.use('/products', productRoutes)

// Error Handling
app.use( (requset, response) => {
    response.status(404).json( {message: '404, Resource Not found!'} )
} )

module.exports = app;