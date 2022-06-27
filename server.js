require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

mongoose.connect(process.env.DB_CONNECTION)

// middlewares
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
	res.json("Hello World")
})

// routes
const dataRoute = require('./routes/data')
app.use('/data', dataRoute)

app.listen(process.env.PORT, () => console.log(`LISTENING TO PORT ${process.env.PORT}`))