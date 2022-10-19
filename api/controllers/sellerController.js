const sellerModel = require('../models/sellerModel')

async function getAllSellers(req, res) {
    try {
        const sellers = await sellerModel.find()
        if (sellers.length === 0) {
            res.status(200).send('No sellers in Database')
        } else {
            res.status(200).send(sellers)
        }
    } catch (error) {
        res.status(500).send('Error in server')
        //console.error(error)
    }
}

async function getSeller(req, res) {
    try {
        const seller = await sellerModel.findById(req.params.sellerId)
        if(seller) {
            res.status(200).send(seller)
        } else {
            res.status(200).send('No seller found')
        }
    } catch (error) {
        console.log(error)
    }
}

async function getSellerProfile(req, res) {
    res.send(res.locals.seller)
}

async function modifyProfile(req, res) {
    res.send(res.locals.seller.profile)
}

async function updateSeller(req, res) {
    try {
        const seller = await sellerModel.findByIdAndUpdate(req.params.sellerId, req.body, { returnDocument: "after" })
        if(seller) {
            res.status(200).send(seller)
        } else {
            res.status(200).send('No seller found')
        }
    } catch (error) {
        console.log(error)
    }
}

async function deleteSeller(req, res) {
    try {
        const seller = await sellerModel.findByIdAndDelete(req.params.sellerId)
        if(seller) {
            res.status(200).send(seller)
        } else {
            res.status(200).send('No seller found')
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllSellers,
    getSeller,
    updateSeller,
    deleteSeller,
    getSellerProfile,
    modifyProfile
}