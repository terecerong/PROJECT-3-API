const mongoose = require("mongoose")

const reportSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    client: {
        type: mongoose.Types.ObjectId,
        ref: "client"
    },
    product: {
        type: mongoose.Types.ObjectId,
        ref: "product"
    },
    id: {
        type: Number,
        required: true
    },
    reportType: {
        type: String,
        required: true
    },
    reporter: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    state: {
        type: String,
        enum: ["solved", "inconclusive", "pending"]
    }
})

const ReportModel = mongoose.model('report', reportSchema)

module.exports = ReportModel
