const mongoose = require('mongoose')

const productSchema = {
    _id: mongoose.Schema.Types.ObjectId,
    productName: mongoose.Schema.Types.String,
    price: mongoose.Schema.Types.String,
    description: mongoose.Schema.Types.String
}

module.exports = mongoose.model('Product', productSchema)