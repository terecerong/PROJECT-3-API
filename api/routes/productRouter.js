const router = require('express').Router()

const { getAllProducts, getProduct, updateProduct, deleteProduct, addProduct } = require('../controllers/productController')

router.get('/', getAllProducts)
router.get('/:productId', getProduct)
router.post('/', addProduct)
router.put('/:productId', updateProduct)
router.delete('/:productId', deleteProduct)

module.exports = router