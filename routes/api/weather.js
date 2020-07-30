const router = require("express").Router();
const axios = require("axios");


const weatherApi = process.env.WEATHER_API_KEY
// const town = "Minneapolis"

router.get("/:town", (req, res) => {
    console.log("here", req.params.town)


    async function weather() {

        const town = req.params.town
        const y = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + town + "&appid=" + weatherApi)
        console.log(y.data)
        res.json(y.data)
    }
    weather();
});


module.exports = router;