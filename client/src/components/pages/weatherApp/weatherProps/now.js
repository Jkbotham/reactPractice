import React from "react";
import "../weather.css";
import { Row, Col, Card } from "react-bootstrap";
import weatherFunction from "../weatherFunctions";

function Now ({data}) {

    const weatherIcon = data ? "http://openweathermap.org/img/wn/" + data.weather.current.weather[0].icon + "@4x.png" : null

    const style = {
        card: {
            width: "95%",
            margin: "auto",
            borderRadius: "100px"
        }
    }
function getTime(time){
    const dt = new Date(time*1000);
    const hr = dt.getHours();
    const m = "0" + dt.getMinutes();
    const s = "0" + dt.getSeconds();
    const date = dt.getDate();
    return date + " " + hr + ":" + m.substr(-2) + ":" + s.substr(-2);

}

console.log(getTime(data.weather.current.dt))
    return (
        <div>

        <Card style={style.card} className="text-center rounded Card cardWidth">
            <Card.Body>
                <Row className="my-auto">
                    <Col className="text-left">

                        <p className="city">{data.local.city}, {data.local.principalSubdivisionCode.split("-")[1]} </p>
                        <span className="temp">{data.weather.current.temp.toFixed()}°</span>
                        <p className="condition">{weatherFunction.capitalize(data.weather.current.weather[0].description)} </p>

                    </Col>
                    <Col className="text-center">

                        <img alt="Weather Icon" className="responsiveIMG" src={weatherIcon}></img>
                        <p className="highLow">{data.weather.daily[0].temp.max.toFixed()}° / {data.weather.daily[0].temp.min.toFixed()}°</p>

                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </div>
    )
}

export default Now;