import React, { useState, useEffect } from "react";
import Header from "../../header/header";
import { Row, Button, Col, Container, Jumbotron, Card } from "react-bootstrap";
import api from "../../../utils/api"
import "./weather.css"
import weatherFunction from "./weatherFunctions"

function Weather() {


    //=====================================================
    // States and Variables
    //=====================================================

    const [weather, setWeather] = useState();
    const [lat, setLat] = useState();
    const [lon, setLong] = useState();

    const weatherIcon = weather ? "http://openweathermap.org/img/wn/" + weather.weather[0].icon + "@4x.png" : null


    //=====================================================
    // Functions
    //=====================================================

    async function getWeather() {

        // Weather By Cord
        console.log(lat, lon);
        const weatherByCords = await api.weatherByCords(lat, lon);
        console.log("Weather by Cords ", weatherByCords.data)
        setWeather(weatherByCords.data)
        //Weather By City

        // const city = "Plymouth"
        // const weatherByCity = await api.weatherByCity(city);
        // setWeather(weatherByCity.data)
        // console.log("Weather by city" + weatherByCity.data)

    }


    //=====================================================
    //  Use Effects
    //=====================================================


    useEffect(() => {
        async function start() {

            navigator.geolocation.getCurrentPosition(function (position) {
                console.log("Latitude is :", position.coords.latitude);
                console.log("Longitude is :", position.coords.longitude);

                setLat(position.coords.latitude);
                setLong(position.coords.longitude);

            });

        }
        start();
    }, [])

    useEffect(() => {
        console.log("Cords", lat, lon)

        if (lon & lat) {
            getWeather();
        } else {
            return
        }

    }, [lon || lat])

    useEffect(() => {
        console.log(weather)

    }, [weather])

    //=====================================================
    // Style
    //=====================================================

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

    //=====================================================

    //=====================================================

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

                                    <Card style={style.card} className="text-center rounded Card cardWidth">
                                        <Card.Body>
                                            <Row className="my-auto">
                                                <Col className="text-left">
                                                    <p className="city">{weather.name} </p>
                                                    <span className="temp">{weather.main.temp}°</span>

                                                    <p className="condition">{weatherFunction.capitalize(weather.weather[0].description)} </p>


                                                </Col>
                                                <Col className="text-center">
                                                    <img alt="Weather Icon" className="responsiveIMG" src={weatherIcon}></img>
                                                    <p className="highLow">{weather.main.temp_max}° / {weather.main.temp_min}°</p>

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

    {/* <p>Feels Like: {weather.main.feels_like}°</p> */ }
    {/* <p>Humidity: {weather.main.humidity}</p>s */ }
    {/* <Row>
                                                        <Col>
                                                            <p> Wind </p>
                                                            <p>{weatherFunction.windDirection(weather.wind.deg)} {weather.wind.speed} mph</p>
                                                        </Col>
                                                        {weather.wind.gust ?
                                                            <Col>
                                                                <p>Gusts</p>
                                                                <p>{weather.wind.gust}</p>
                                                            </Col>
                                                            :
                                                            <> </>
                                                        }

                                                    </Row> */}
}

export default Weather;


