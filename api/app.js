// Import Modules

const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
require('dotenv').config()

// Import Components


// Import Routes
const CityRoute = require('./routes/postCity')

// Envs
const PORT = process.env.APP_PORT || 3001


// Middleware
const app = express()
app.use(cors())
app.use(bodyParser.json())

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Listening on : ${PORT}`))
    } catch(err) {console.error(err)}
}
start()



// Setup Routes

app.use('/api/weather/', CityRoute)

