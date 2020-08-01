import axios from "axios";
import weather from "../components/pages/weatherApp/weather";

export default {
    weatherByCity: (city) => {
        return axios.get("/api/weather/city/" + city);
    },

    weatherByCords: (lat, lon) => {
        return axios.get("/api/weather/cords/" + lat + "/" + lon)
    }
}