const sellerModel = require('../models/sellerModel')
const clientModel = require('../models/clientModel')

const jwt = require('jsonwebtoken')

async function checkAuthSeller(req, res, next) {
    if (!req.headers.token) {
        res.status(403).send('No token found')
    } else {
        try {
            const decodedToken = jwt.verify(req.headers.token, process.env.SECRET)
            console.log(decodedToken)
            res.locals.seller = await sellerModel.findOne({ email: decodedToken.email })
            next()
        } catch (error) {
            console.log(error)
            res.status(403).send(`Token not valid: ${error}`)     
        }
    }
}

async function checkAuthClient(req, res, next) {
    if (!req.headers.token) {
        res.status(403).send('No token found')
    } else {
        try {
            const decodedToken = jwt.verify(req.headers.token, process.env.SECRET)
            console.log(decodedToken)
            res.locals.client = await clientModel.findOne({ email: decodedToken.email })
            next()
        } catch (error) {
            console.log(error)
            res.status(403).send(`Token not valid: ${error}`)     
        }
    }
}

//function checkRole(req, res, next) {

//}

module.exports = {
    checkAuthSeller,
    checkAuthClient
    //checkRole
}