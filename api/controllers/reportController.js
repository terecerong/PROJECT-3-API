const reportModel = require('../models/reportModel')

async function getAllReports(req, res) {
    try {
        const report = await reportModel.find()
        if (report.length === 0) {
            res.status(200).send('No reports in Database')
        } else {
            res.status(200).send(report)
        }
    } catch (error) {
        res.status(500).send('Error in server')
        //console.error(error)
    }
}

async function getReport(req, res) {
    try {
        const report = await reportModel.findById(req.params.reportId)
        if(report) {
            res.status(200).send(report)
        } else {
            res.status(200).send('No report found')
        }
    } catch (error) {
        console.log(error)
    }
}

async function addReport(req, res) {
    try {
        const report = await reportModel.create(req.body)
        if(report) {
            res.status(200).send(report)
        } else {
            res.status(200).send('No reports')
        }
    } catch (error) {
        console.log(error) 
    }
}

async function updateReport(req, res) {
    try {
        const report = await reportModel.findByIdAndUpdate(req.params.reportId, req.body, { returnDocument: "after" })
        if(report) {
            res.status(200).send(report)
        } else {
            res.status(200).send('No report found')
        }
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getAllReports,
    getReport,
    updateReport,
    addReport
}