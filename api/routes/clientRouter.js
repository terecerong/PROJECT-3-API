const router = require('express').Router()
const { checkAuthClient } = require('../utils')

const { getAllClients, getClient, updateClient, deleteClient, getClientProfile, getClientPurchase } = require('../controllers/clientController')

router.get('/', getAllClients)
router.get('/profile', checkAuthClient, getClientProfile)
router.get('/purchase', checkAuthClient, getClientPurchase)
router.get('/:clientId', getClient)
router.put('/:clientId', updateClient)
router.delete('/:clientId', deleteClient)

module.exports = router