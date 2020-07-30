import React, { useState, useEffect } from "react";
import Header from "../../header/header";
import { Row, Button, Col, Container, Jumbotron, Card } from "react-bootstrap";
import api from "../../../utils/api"
import "./weather.css"

function Weather() {

    const [weather, setWeather] = useState();


    async function getWeather() {
        const weatherData = await api.weather();
        // console.log(weatherData.data, "This Thought")
        setWeather(weatherData.data)
        console.log(weather)
    }

    const weatherIcon = weather ? "http://openweathermap.org/img/wn/" + weather.weather[0].icon + "@4x.png" : null
    useEffect(() => {
        getWeather();
    }, [])

    useEffect(() => {
        console.log(weather)
    }, [weather])

    const style = {
        h1: {
            margin: 0,
            justifyContent: "center"
        },
        card: {
            width: "95%",
            margin: "auto",
            borderRadius: "100px"
        }
    }


    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col>
                        <Jumbotron fluid>
                            <h1 style={style.h1}>Weather App</h1>

                            <p>This will be a simple weather application!</p>

                            {weather ?
                                <div>

                                    <h2>{weather.name}</h2>
                                    <h2>{weather.main.temp}</h2>
                                    <p>Feels Like: {weather.main.feels_like}</p>
                                    <p>Humidity: {weather.main.humidity}</p>


                                    <Card style={style.card} className="text-center rounded Card">
                                        <Card.Body>
                                            <Row>
                                                <Col className="text-left">
                                                    <Card.Title>{weather.name}</Card.Title>

                                                    <br></br>
                                                    <h3> Temp {weather.main.temp}°</h3>
                                                    <p>Feels Like: {weather.main.feels_like}</p>
                                                    <p>Humidity: {weather.main.humidity}</p>
                                                    <br></br>
                                                    <Row>
                                                        <Col>
                                                            <p> Wind </p>
                                                            <p>{weather.wind.speed}</p>
                                                        </Col>
                                                        <Col>
                                                            <p>Gusts</p>
                                                            <p>{weather.wind.gust}</p>
                                                        </Col>
                                                    </Row>

                                                </Col>
                                                <Col>
                                                    <h3>{weather.weather[0].description} </h3>
                                                    <img alt="Weather Icon" src={weatherIcon}></img>
                                                </Col>
                                            </Row>


                                        </Card.Body>
                                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                                    </Card>
                                </div>

                                :

                                <p>No Weather to report</p>
                            }

                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Weather;