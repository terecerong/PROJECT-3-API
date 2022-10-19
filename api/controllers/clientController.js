const clientModel = require('../models/clientModel')

async function getAllClients(req, res) {
    try {
        const clients = await clientModel.find()
        if (clients.length === 0) {
            res.status(200).send('No clients in Database')
        } else {
            res.status(200).send(clients)
        }
    } catch (error) {
        res.status(500).send('Error in server')
        //console.error(error)
    }
}

async function getClientProfile(req, res) {
    res.send(res.locals.client)
}

async function getClientPurchase(req, res) {
    res.send(res.locals.client.tickets)

}


async function getClient(req, res) {
    try {
        const client = await clientModel.findById(req.params.clientId)
        if(client) {
            res.status(200).send(client)
        } else {
            res.status(200).send('No client found')
        }
    } catch (error) {
        console.log(error)
    }
}

async function updateClient(req, res) {
    try {
        const client = await clientModel.findByIdAndUpdate(req.params.clientId, req.body, { returnDocument: "after" })
        if(client) {
            res.status(200).send(client)
        } else {
            res.status(200).send('No client found')
        }
    } catch (error) {
        console.log(error)
    }
}

async function deleteClient(req, res) {
    try {
        const client = await clientModel.findByIdAndDelete(req.params.clientId)
        if(client) {
            res.status(200).send(client)
        } else {
            res.status(200).send('No client found')
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllClients,
    getClient,
    updateClient,
    deleteClient,
    getClientProfile,
    getClientPurchase
}