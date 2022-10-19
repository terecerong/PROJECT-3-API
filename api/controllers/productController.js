const productModel = require('../models/productModel')

async function getAllProducts(req, res) {
    try {
        const products = await productModel.find()
        if (products.length === 0) {
            res.status(200).send('No products in Database')
        } else {
            res.status(200).send(products)
        }
    } catch (error) {
        res.status(500).send('Error in server')
        //console.error(error)
    }
}

async function getProduct(req, res) {
    try {
        const product = await productModel.findById(req.params.productId)
        if(product) {
            res.status(200).send(product)
        } else {
            res.status(200).send('No product found')
        }
    } catch (error) {
        console.log(error)
    }
}

async function addProduct(req, res) {
    try {
        const product = await productModel.create(req.body)
        if(product) {
            res.status(200).send(product)
        } else {
            res.status(200).send('No products')
        }
    } catch (error) {
        console.log(error) 
    }
}

async function updateProduct(req, res) {
    try {
        const product = await productModel.findByIdAndUpdate(req.params.productId, req.body, { returnDocument: "after" })
        if(product) {
            res.status(200).send(product)
        } else {
            res.status(200).send('No product found')
        }
    } catch (error) {
        console.log(error)
    }
}

async function deleteProduct(req, res) {
    try {
        const product = await productModel.findByIdAndDelete(req.params.productId)
        if(product) {
            res.status(200).send(product)
        } else {
            res.status(200).send('No product found')
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct,
    addProduct
}