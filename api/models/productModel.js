const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    // image: {
    //     type: String,
    //     cloudinary
    // },
    seller: {
        type: mongoose.Types.ObjectId,
        ref: "seller"
    },
    reviews: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    report: {
        type: mongoose.Types.ObjectId,
        ref: "report"
    }
})

const ProductModel = mongoose.model('product', productSchema)

module.exports = ProductModel
