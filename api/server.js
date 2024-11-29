const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const tasksRouter = require('./router')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/api', tasksRouter)

server.use('*', (req, res) => {
    res.json({ message: 'API is UP!' })
})

server.use((err, req, res, next) => {
    console.error(err)
    const statusCode = err.status || 500
    const message = err.message || 'Internal Server Error!'
    res.status(statusCode).json({ message })
})

module.exports = server