import React, { useState, useEffect } from "react";
import Header from "../../header/header";
import { Row, Button, Col, Container, Jumbotron, Card } from "react-bootstrap";
import api from "../../../utils/api"
import "./weather.css"
import weatherFunction from "./weatherFunctions"
import weatherNow from "./weatherProps/now"

function Weather() {


    //=====================================================
    // States and Variables
    //=====================================================

    const [apiResponse, setApiResponse] = useState();
    const [lat, setLat] = useState();
    const [lon, setLong] = useState();

    const weatherIcon = apiResponse ? "http://openweathermap.org/img/wn/" + apiResponse.weather.current.weather[0].icon + "@4x.png" : null


    //=====================================================
    // Functions
    //=====================================================

    async function getWeather() {

        // Weather By Cords
        const weatherByCords = await api.weatherByCords(lat, lon);
        console.log("Weather by Cords ", weatherByCords.data);
        setApiResponse(weatherByCords.data)
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
        async function load() {

            navigator.geolocation.getCurrentPosition(function (position) {
                // console.log("Latitude is :", position.coords.latitude);
                // console.log("Longitude is :", position.coords.longitude);
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });

        }
        load();
    }, [])

    useEffect(() => {
        // console.log("Cords", lat, lon)

        if (lon & lat) {
            getWeather();
        } else {
            return
        }

    }, [lon || lat])

    useEffect(() => {
        console.log(apiResponse)
        if(apiResponse) { 
            console.log(apiResponse.local.principalSubdivisionCode.split("-"))
        }
    }, [apiResponse])

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

                            {apiResponse ?
                                <div>

                                    <Card style={style.card} className="text-center rounded Card cardWidth">
                                        <Card.Body>
                                            <Row className="my-auto">
                                                <Col className="text-left">

                                                    <p className="city">{apiResponse.local.city}, {apiResponse.local.principalSubdivisionCode.split("-")[1]} </p>
                                                    <span className="temp">{apiResponse.weather.current.temp.toFixed()}°</span>
                                                    <p className="condition">{weatherFunction.capitalize(apiResponse.weather.current.weather[0].description)} </p>

                                                </Col>
                                                <Col className="text-center">

                                                    <img alt="Weather Icon" className="responsiveIMG" src={weatherIcon}></img>
                                                    <p className="highLow">{apiResponse.weather.daily[0].temp.max.toFixed()}° / {apiResponse.weather.daily[0].temp.min.toFixed()}°</p>

                                                </Col>
                                            </Row>


                                        </Card.Body>
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


