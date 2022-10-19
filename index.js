require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

async function DBConnection() {
   try {
     await mongoose.connect(process.env.DBURL, {
        dbName: process.env.DBNAME
     })
     console.log('Connected to DB!')
   } catch (error) {
    throw(error)
   }
}

function launchServer() {
    app
    .use(morgan('dev'))
    .use(cors())
    .use(express.json())
    .use('/api', require('./api/routes'))
    .listen(process.env.PORT, () => {
        console.log(`Listening on port ${process.env.PORT}`)
    })
}

async function start() {
await DBConnection()
launchServer()
}

start()
