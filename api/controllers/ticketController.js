const ticketModel = require('../models/ticketModel')

async function getAllTickets(req, res) {
    try {
        const ticket = await ticketModel.find()
        if (ticket.length === 0) {
            res.status(200).send('No tickets in Database')
        } else {
            res.status(200).send(ticket)
        }
    } catch (error) {
        res.status(500).send('Error in server')
        //console.error(error)
    }
}

async function getTicket(req, res) {
    try {
        const ticket = await ticketModel.findById(req.params.ticketId)
        if(ticket) {
            res.status(200).send(ticket)
        } else {
            res.status(200).send('No ticket found')
        }
    } catch (error) {
        console.log(error)
    }
}

async function addTicket(req, res) {
    try {
        const ticket = await ticketModel.create(req.body)
        if(ticket) {
            res.status(200).send(ticket)
        } else {
            res.status(200).send('No tickets')
        }
    } catch (error) {
        console.log(error) 
    }
}

module.exports = {
    getAllTickets,
    getTicket,
    addTicket
}