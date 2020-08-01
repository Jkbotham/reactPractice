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

    async function weatherByCords() {
        // console.log(req.params)
        console.log("24 - Weather.js " + " lon " + req.params.lon + " Lat " + req.params.lat)
        const lon = req.params.lon
        const lat = req.params.lat

        const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + weatherApi) .catch(err => { console.log(err)})
        console.log("Lat and lon response", response.data)

        res.json(response.data)
        
    }

        weatherByCords();

})

module.exports = router;