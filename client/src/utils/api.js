import axios from "axios";
import weather from "../components/pages/weatherApp/weather";

const town = "Minneapolis"

export default {
        weather: () => {
            return axios.get("/api/weather/" + town);
    }
}