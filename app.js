// HANDLE OUR REQ & RES
const express = require('express')
const app = express()

// Managing your routes
const productRoutes = require('./api/products/products')
app.use('/products', productRoutes)

// Error Handling
app.use( (requset, response) => {
    response.status(404).json( {message: '404, Resource Not found!'} )
} )

module.exports = app;