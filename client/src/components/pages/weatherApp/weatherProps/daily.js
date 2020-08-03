import React from "react";
import "../weather.css";
import { Row, Col, Card } from "react-bootstrap";
import weatherFunction from "../weatherFunctions";

function Daily({ data }) {

    //Weather ICON link
    const weatherIcon = data ? "http://openweathermap.org/img/wn/" + data.weather.current.weather[0].icon + "@4x.png" : null

    const style = {
        card: {
            width: "95%",
            margin: "auto",
            borderRadius: "100px"
        }
    }

    return (
        <div>

            <Card style={style.card} className="text-center rounded Card cardWidth">
                <Card.Body>
                    <Row className="my-auto">

                        <Col>
                            <Row>
                                <Col>
                                    <strong>Today</strong>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img alt={data.weather.daily[0].weather[0].description} src={weatherFunction.weatherIcon(data.weather.daily[0].weather[0].icon)}></img>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>{weatherFunction.temperature(data.weather.daily[0].temp.max)} / {weatherFunction.temperature(data.weather.daily[0].temp.min)}</p>
                                </Col>
                            </Row>
                        </Col>

                        <Col>
                            <Row>
                                <Col>
                                    <strong>{weatherFunction.getDate(data.weather.daily[1].dt)}</strong>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img alt={data.weather.daily[1].weather[0].description} src={weatherFunction.weatherIcon(data.weather.daily[1].weather[0].icon)}></img>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>{weatherFunction.temperature(data.weather.daily[1].temp.max)} / {weatherFunction.temperature(data.weather.daily[0].temp.min)}</p>
                                </Col>
                            </Row>
                        </Col>

                        <Col>
                            <Row>
                                <Col>
                                    <strong>{weatherFunction.getDate(data.weather.daily[2].dt)}</strong>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img alt={data.weather.daily[2].weather[0].description} src={weatherFunction.weatherIcon(data.weather.daily[2].weather[0].icon)}></img>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>{weatherFunction.temperature(data.weather.daily[2].temp.max)} / {weatherFunction.temperature(data.weather.daily[0].temp.min)}</p>
                                </Col>
                            </Row>
                        </Col>

                        <Col>
                            <Row>
                                <Col>
                                    <strong>{weatherFunction.getDate(data.weather.daily[3].dt)}</strong>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img alt={data.weather.daily[3].weather[0].description} src={weatherFunction.weatherIcon(data.weather.daily[3].weather[0].icon)}></img>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>{weatherFunction.temperature(data.weather.daily[3].temp.max)} / {weatherFunction.temperature(data.weather.daily[0].temp.min)}</p>
                                </Col>
                            </Row>
                        </Col>

                        <Col>
                            <Row>
                                <Col>
                                    <strong>{weatherFunction.getDate(data.weather.daily[4].dt)}</strong>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img alt={data.weather.daily[3].weather[0].description} src={weatherFunction.weatherIcon(data.weather.daily[4].weather[0].icon)}></img>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>{weatherFunction.temperature(data.weather.daily[3].temp.max)} / {weatherFunction.temperature(data.weather.daily[0].temp.min)}</p>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Daily;