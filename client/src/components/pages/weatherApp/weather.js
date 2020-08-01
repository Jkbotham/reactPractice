import React, { useState, useEffect } from "react";
import Header from "../../header/header";
import { Row, Button, Col, Container, Jumbotron, Card } from "react-bootstrap";
import api from "../../../utils/api"
import "./weather.css"
import WeatherNow from "./weatherProps/now"

function Weather() {


    //=====================================================
    // States and Variables
    //=====================================================

    const [apiResponse, setApiResponse] = useState();
    const [lat, setLat] = useState();
    const [lon, setLong] = useState();




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
        // console.log(apiResponse)
    }, [apiResponse])

    //=====================================================
    // Style
    //=====================================================



    //=====================================================

    //=====================================================

    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col>
                        <Jumbotron fluid>

                            {apiResponse ?
                                <div>
                                    <WeatherNow data={apiResponse} />
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


