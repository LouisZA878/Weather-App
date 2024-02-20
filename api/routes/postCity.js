const router = require("express").Router()
require('dotenv').config()


// ENVs
const API = process.env.WEATHER_API

router.post('/:city', async ( req, res ) => {
    const { city } = req.params

    await fetch(`http://api.weatherapi.com/v1/forecast.json?q=${city}&key=${API}`)
        .then(response => response.json())
        .then(data => {
            res.send(data)
        })


})


module.exports = router