const clientModel = require('../models/clientModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function login(req, res) {
    try {
        const client = await clientModel.findOne({ email: req.body.email })
        console.log(client)
        if (client) {
            const passwordMatch = await bcrypt.compare(req.body.password, client.password)
            if (passwordMatch) {
                res.status(200).send(generateToken(client))
            } else {
            res.status(401).send('User or password does not match')
        }
      }  
    } catch (error) {
        console.log(error)
    }
}


async function signup(req, res) {
    try {
        console.log("hola")
        const client = await clientModel.findOne({ email: req.body.email })
       
        if (client) {
            res.status(409).send('Client already exist')
        } else {
            req.body.password = await bcrypt.hash(req.body.password, 10)
            const newClient = await clientModel.create(req.body)
            res.status(200).send(generateToken(newClient))
        }
    } catch (error) {
        console.log(error)
    }
 }


function generateToken(clientVerification) {
    const clientData = { email: clientVerification.email, role: clientVerification.role }
    const token = jwt.sign(clientData, process.env.SECRET, { expiresIn: '24h' })
    return { token: token, ...clientData }

}

module.exports =  {
    login,
    signup
}