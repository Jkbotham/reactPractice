import React from "react";
import "../weather.css";
import { Row, Col, Card } from "react-bootstrap";
import weatherFunction from "../weatherFunctions";

function Now({ data }) {
    return (
        <div>

            <Card className="text-center rounded Card">
                <Card.Body>
                    <Row className="my-auto">

                        <Col className="text-left">
                            <p className="city">{data.local.city}, {data.local.principalSubdivisionCode.split("-")[1]} </p>
                            <p className="condition">{weatherFunction.capitalize(data.weather.current.weather[0].description)} </p>
                            <span className="temp">{data.weather.current.temp.toFixed()}°</span>
                            <p className="feelsLike">Feels like {weatherFunction.temperature(data.weather.current.feels_like)}</p>
                        </Col>

                        <Col className="text-center">
                            <img alt="Weather Icon" className="responsiveIMG" src={weatherFunction.weatherIcon(data.weather.current.weather[0].icon, "large")}></img>
                            <p className="highLow">{data.weather.daily[0].temp.max.toFixed()}° / {data.weather.daily[0].temp.min.toFixed()}°</p>
                        </Col>

                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Now;