const router = require('express').Router()
const { checkAuthSeller } = require('../utils')

const { getAllSellers, getSeller, updateSeller, deleteSeller, getSellerProfile, modifyProfile } = require('../controllers/sellerController')

router.get('/', getAllSellers)
router.get('/profile', checkAuthSeller, getSellerProfile)
router.get('/profile', checkAuthSeller, modifyProfile)
router.get('/:sellerId', getSeller)
router.put('/:sellerId', updateSeller)
router.delete('/:sellerId', deleteSeller)

module.exports = router