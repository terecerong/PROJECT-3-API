const router = require('express').Router()

const { getAllTickets, getTicket, addTicket } = require('../controllers/ticketController')

router.get('/', getAllTickets)
router.get('/:ticketId', getTicket)
router.post('/', addTicket)


module.exports = router