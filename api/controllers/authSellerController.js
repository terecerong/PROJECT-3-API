const sellerModel = require('../models/sellerModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function login(req, res) {
    try {
        const seller = await sellerModel.findOne({ email: req.body.email })
        if (seller) {
            const passwordMatch = await bcrypt.compare(req.body.password, seller.password)
            console.log(passwordMatch)
            if (passwordMatch) {
                res.status(200).send(generateToken(seller))
            } else {
            res.status(401).send('User or password does not match')
        }
     } else {
        res.status(401).send('User or password does not match')
     }
    } catch (error) {
        console.log(error)
    }
}


async function signup(req, res) {
    try {
        const seller = await sellerModel.findOne({ email: req.body.email })
       
        if (seller) {
            res.status(409).send('User already exist')
        } else {
            req.body.password = await bcrypt.hash(req.body.password, 10)
            const newSeller = await sellerModel.create(req.body)
            res.status(200).send(generateToken(newSeller))
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
 }


function generateToken(sellerVerification) {
    const sellerData = { email: sellerVerification.email, role: sellerVerification.role }
    const token = jwt.sign(sellerData, process.env.SECRET, { expiresIn: '24h' })
    return { token: token, ...sellerData }

}

module.exports =  {
    login,
    signup
}