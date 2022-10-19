const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
    seller: {
        type: mongoose.Types.ObjectId,
        required: "seller"
    },
    product: {
        type: mongoose.Types.ObjectId,
        ref: "product"
    },
    price: {
        type: Number,
        required: true
    },
    units: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    client: {
        type: mongoose.Types.ObjectId,
        required: "client"
    }
})

const TicketModel = mongoose.model('ticket', ticketSchema)

module.exports = TicketModel
