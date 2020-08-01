const router = require("express").Router();
const axios = require("axios");


const weatherApi = process.env.WEATHER_API_KEY
// const town = "Minneapolis"

router.get("/city/:city", (req, res) => {

    console.log("City being received ", req.params.city)
    async function weatherByCity() {

        const town = req.params.city
        const y = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + town + "&appid=" + weatherApi)

        console.log(y.data)
        res.json(y.data)
    }
    weatherByCity();
});

router.get("/cords/:lat/:lon", (req, res) => {

    async function weather() {
        const lon = req.params.lon
        const lat = req.params.lat

        const weatherResponse = await axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial" + "&appid=" + weatherApi).catch(err => { console.log(err) })
        const localData = await axios.get("https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=" + lat + "&longitude=" + lon + "&localityLanguage=en")
        const response = {
            weather: weatherResponse.data,
            local: localData.data
        }
        // console.log(response)
        res.json(response)
    }
    weather();
})


module.exports = router;