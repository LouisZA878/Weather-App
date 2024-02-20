// Import Modules

const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

// Import Components


// Import Routes

// Envs
const PORT = 3001 || process.env.PORT


// Middleware
const app = express()

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Listening on : ${PORT}`))
    } catch(err) {console.error(err)}
}
start()



// Setup Routes



