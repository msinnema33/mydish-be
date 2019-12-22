require('dotenv').config()

//setup
const express = require('express')
const server = express()
const router = express.Router()
const port = process.env.SERVER_PORT || 4447

//import and use middleware
server.use(require('cors')())
server.use(require('helmet')())
server.use(express.json())

//routers
server.use(require('./endpoints/routers/users'))
server.use(require('./endpoints/routers/recipes'))

//signal that the server is in fact running
server.listen(port, () => {
    console.clear()
    console.log(`\n*** Go ahead, make my port ${port} **\n`)
})

//catchall endpoint
server.get('/', (req, res) => {
    res.status(200).json('Yup, it working.')
})