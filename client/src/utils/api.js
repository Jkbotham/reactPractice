import axios from "axios";
import weather from "../components/pages/weatherApp/weather";

const weatherApi = "ffb6baedd502c2b85f5529aeaf64b272"
const town = "Minneapolis"

export default {
        weather: () => {
            return axios.get("/api/weather/" + town);
    }
}