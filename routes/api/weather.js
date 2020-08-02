const router = require("express").Router();
const axios = require("axios");


const weatherApi = process.env.WEATHER_API_KEY
// const town = "Minneapolis"

router.get("/city/:city", async (req, res) => {

    console.log("City being received ", req.params.city)

        const town = req.params.city
        const y = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + town + "&appid=" + weatherApi).catch(err => { console.log(err) })

        console.log(y.data)

        res.json(y.data)
});

router.get("/zipcode/:zipCode", async (req,res) =>{
    const zip = req.params.zipCode

    const zipResponse = await axios.get("https://api.openweathermap.org/data/2.5/weather?zip="+ zip + "&units=imperial&appid=" + weatherApi).catch(err => { console.log(err) })

    const lon = zipResponse.data.coord.lon
    const lat = zipResponse.data.coord.lat

    const weatherResponse = await axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial" + "&appid=" + weatherApi).catch(err => { console.log(err) })
    const localData = await axios.get("https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=" + lat + "&longitude=" + lon + "&localityLanguage=en")
    const response = {
        weather: weatherResponse.data,
        local: localData.data
    }
    // console.log(zipResponse.data, oneCall.data)
    res.json(response)
})

router.get("/cords/:lat/:lon", async (req, res) => {

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
    
})


module.exports = router;