const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

const PORT = 4002

const todolist = require( './todolist')
app.use('/todolist', todolist)
app.listen(PORT, () => {
    console.log("server run on port " + PORT)
})