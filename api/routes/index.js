const router = require('express').Router()

const clientRouter = require('./clientRouter')
const productRouter = require('./productRouter')
const reportRouter = require('./reportRouter')
const sellerRouter = require('./sellerRouter')
const authSellerRouter = require('./authSellerRouter')
const authClientRouter = require('./authClientRouter')
const ticketRouter = require('./ticketRouter')

router.use('/client', clientRouter);
router.use('/product', productRouter);
router.use('/report', reportRouter);
router.use('/seller', sellerRouter)
router.use('/authSeller', authSellerRouter)
router.use('/authClient', authClientRouter)
router.use('/ticket', ticketRouter);



module.exports = router