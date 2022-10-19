const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
    street: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    zipcode: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
})

const paymentDetailsSchema = new mongoose.Schema({
    name: {
        type: String,
        enum: ["visa", "mastercard"],
    },
    cardNumber: {
        type: Number,
        required: true
    },
    expireDate: {
        type: Number,
        required: true
    },
    cvv: {
        type: Number,
        required: true
    }
})

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    report: {
        type: String,
        required: true
    },
    address: {
        type: addressSchema
    },
    paymentDetails: {
        type: paymentDetailsSchema
    },
    rol: {
        type: String,
        enum: ["admin", "client"],
        default: "client"
    },
    tickets: [{
        type: mongoose.Types.ObjectId,
        ref: "ticket"
    }],
    country: {
        type: String,
        required: true
    }
})

const ClientModel = mongoose.model('client', clientSchema)

module.exports = ClientModel