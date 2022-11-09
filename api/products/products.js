const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json( {message: 'GET Request to /products'} )
})

router.get('/productId', (req, res) => {
    // check if the productId = 'special'
    if(req.params.productId === 'special') {
        res.status(200).json( {message: 'You have a SPECIAL ID'} )
    } else {
        res.status(200).json( {message: 'You have an ORDINARY ID'} )
    }
})

router.post('/', (req, res) => {
    res.status(200).json( {message: 'POST Request to /products'} )
})

router.put('/', (req, res) => {
    res.status(200).json( {message: 'PUT Request to /products'} )
})

router.delete('/', (req, res) => {
    res.status(200).json( {message: 'DELETE Request to /products'} )
})

module.exports = router;