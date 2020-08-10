const router = require("express").Router();
const axios = require("axios");
const weatherApi = process.env.WEATHER_API_KEY;

router.get("/city/:city", async (req, res) => {
  console.log("City being received ", req.params.city);

  const city = req.params.city;

  //API request for weather data based on requsted city
  const response = await axios
    .get(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        weatherApi
    )
    .catch((err) => {
      console.log(err);
    });
  // console.log(y.data)
  res.json(response.data);
});

router.get("/zipcode/:zipCode", async (req, res) => {
  const zip = req.params.zipCode;

  //API request for weather data based on req zipcode
  const zipResponse = await axios
    .get(
      "https://api.openweathermap.org/data/2.5/weather?zip=" +
        zip +
        "&units=imperial&appid=" +
        weatherApi
    )
    .catch((err) => {
      console.log(err.response.data);
      res.status(err.response.data.cod).json(err.response.data);
      return err;
    });

  if (zipResponse.response) {
    // res.json(zipResponse.response.data);
    return;
  }
  // console.log(zipResponse.data);
  const lon = zipResponse.data.coord.lon;
  const lat = zipResponse.data.coord.lat;

  //API request getting weather data based on lat and lon of request
  const weatherResponse = await axios
    .get(
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        lat +
        "&lon=" +
        lon +
        "&units=imperial" +
        "&appid=" +
        weatherApi
    )
    .catch((err) => {
      console.log(err);
    });
  //API request getting geocode information based on lat and lon of request
  const localData = await axios.get(
    "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=" +
      lat +
      "&longitude=" +
      lon +
      "&localityLanguage=en"
  );

  //Responses from above API calls being declared as an object
  const response = {
    weather: weatherResponse.data,
    local: localData.data,
  };
  // console.log(zipResponse.data, oneCall.data)
  res.json(response);
});

router.get("/cords/:lat/:lon", async (req, res) => {
  const lon = req.params.lon;
  const lat = req.params.lat;

  //API request getting weather data based on lat and lon of request
  const weatherResponse = await axios
    .get(
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        lat +
        "&lon=" +
        lon +
        "&units=imperial" +
        "&appid=" +
        weatherApi
    )
    .catch((err) => {
      console.log(err);
    });
  //API request getting geocode information based on lat and lon of request
  const localData = await axios.get(
    "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=" +
      lat +
      "&longitude=" +
      lon +
      "&localityLanguage=en"
  );

  //Responses from above API calls being declared as an object
  const response = {
    weather: weatherResponse.data,
    local: localData.data,
  };
  // console.log(response)
  res.json(response);
});

module.exports = router;
