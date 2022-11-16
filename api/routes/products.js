const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Product = require('../model/products')

router.get('/', (req, res) => {
    Product.find()
        .then(result => res.status(200).json( {message: 'All Products', products: result} ))
        .catch(error => res.status(500).json( {message: 'Server Error', err: error} ))
})

router.get('/:productId', (req, res) => {
    const productId = req.params.productId
    Product.findById(productId)
        .then(result => res.status(200).json( {message: 'Object Found', document: result} ))
        .catch(error => res.status(500).json( {message: 'Server Error', err: error} ))
})

router.post('/', (req, res) => {
    const product = new Product({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    })
    product.save()
        .then(result => res.status(201).json( {new_message: 'POST Successful', createdPost: result} ))
        .catch(err => res.status(500).json( {message: 'Server Error', error: err} ))
})

router.patch('/:productId', (req, res) => {
    const productId = req.params.productId
    const updatedProduct = {
        _id: productId,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    }
    Product.findByIdAndUpdate(productId, updatedProduct)
        .then(result => res.status(203).json( {message: 'Update Successfylt', updatedDoc: {name: req.body.name, price: req.body.price, description: req.body.description} } ))
        .catch(err => res.status(500).json( {message: 'Server Error', error: err} ))
})

router.delete('/:productId', (req, res) => {
    const productId = req.params.productId
    Product.remove({_id: productId})
        .then(result => res.status(200).json( {message: 'Update Successfylt', document: result} ))
        .catch(err => res.status(500).json( {message: 'Server Error', error: err} ))
})

module.exports = router;