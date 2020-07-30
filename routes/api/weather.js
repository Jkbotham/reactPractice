const router = require("express").Router();
const axios = require("axios");


const weatherApi = "ffb6baedd502c2b85f5529aeaf64b272"
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