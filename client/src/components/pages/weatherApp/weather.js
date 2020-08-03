import React, { useState, useEffect } from "react";
import Header from "../../header/header";
import { Row, Button, Col, Container, Jumbotron, Card, Form, FormControl } from "react-bootstrap";
import api from "../../../utils/api"
import "./weather.css"
import WeatherNow from "./weatherProps/now"
import WeatherDaily from "./weatherProps/daily"
function Weather() {

    //=====================================================
    // States and Variables
    //=====================================================

    const [apiResponse, setApiResponse] = useState();
    const [lat, setLat] = useState();
    const [lon, setLong] = useState();
    const [zipSearch, setZipSearch] = useState();

    //=====================================================
    // Functions
    //=====================================================

    //Starts request for weather data using either the clients Lat & Lon or a zip code
    async function getWeather() {
        // Weather By Cords
        if (!zipSearch) {
            if (lon && lat) {
                const weatherByCords = await api.weatherByCords(lat, lon);
                console.log("Weather by Cords ", weatherByCords.data);
                setApiResponse(weatherByCords.data)
            }
        }else {
            const weatherByZip = await api.weatherByZip(zipSearch)
            console.log(weatherByZip);
            setApiResponse(weatherByZip.data);
        }
    }

    //Handles request when searching for weather using the search field
    const handleSubmit = e => {
        e.preventDefault();
        getWeather();
    }

    //=====================================================
    //  Use Effects
    //=====================================================


    useEffect(() => {

             async function cords () {
                navigator.geolocation.getCurrentPosition(function (position) {
                    // console.log("Latitude is :", position.coords.latitude);
                    // console.log("Longitude is :", position.coords.longitude);
                    setLat(position.coords.latitude);
                    setLong(position.coords.longitude);
                });
            }
            cords();
    }, [])

    useEffect(() => {
            getWeather();
    }, [lon, lat])

    //=====================================================

    //=====================================================

    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col>
                        <Jumbotron fluid>
                            <Row>
                                <Col className="searchBarCol">
                                    <Form inline className="text-right" onSubmit={e => handleSubmit(e)}>
                                        <FormControl onChange={e => setZipSearch(e.target.value)} type="text" placeholder="Zip Code" className=" mr-sm-2" />
                                        <Button type="submit">Submit</Button>
                                    </Form>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    {apiResponse ?
                                        <div>
                                            <WeatherNow data={apiResponse} />
                                        </div>
                                        :
                                        <p>No Weather to report</p>
                                    }
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    {apiResponse ?
                                        <div>
                                            <WeatherDaily data={apiResponse} />
                                        </div>
                                        :
                                        <p>No Weather to report</p>
                                    }
                                </Col>
                            </Row>
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


