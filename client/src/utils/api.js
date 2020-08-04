import axios from "axios";

export default {
    weatherByCity: (city) => {
        return axios.get("/api/weather/city/" + city);
    },

    weatherByCords: (lat, lon) => {
        return axios.get("/api/weather/cords/" + lat + "/" + lon)
    },

    weatherByZip: (zip) => {
        return axios.get("/api/weather/zipcode/" + zip)
    }
}