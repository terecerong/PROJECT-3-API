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
    bankName: {
        type: String,
        required: true
    },
    swift: {
        type: String,
        required: true
    },
    accountNumberOrIban: {
        type: Number,
        required: true
    },
    withdrawAmount: {
        type: Number,
        required: true
    },
    payoutAmount: {
        type: Number,
        required: true
    },
    accountCurrency: {
        type: String,
        required: true
    }
})

const sellerSchema = new mongoose.Schema({
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
    genre: {
        type: String,
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
        enum: ["seller"]
    },
    dniNumber: {
        type: String,
        unique: true,
        required: true
    },
    dniExpireDate: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    verify: {
        type: Boolean,
        default: false
    },
    products: {
        type: mongoose.Types.ObjectId,
        ref: "product"
    },
    tickets: {
        type: mongoose.Types.ObjectId,
        ref: "ticket"
    }
})

const SellerModel = mongoose.model('seller', sellerSchema)

module.exports = SellerModel