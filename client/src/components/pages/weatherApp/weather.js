import React, { useState, useEffect } from "react";
import Header from "../../header/header";
import { Row, Button, Col, Container, Jumbotron } from "react-bootstrap";
import api from "../../../utils/api"

function Weather() {

    const [weather, setWeather] = useState();

    async function getWeather(){
        const weatherData = await api.weather();
        // console.log(weatherData.data, "This Thought")
        setWeather(weatherData.data)
        console.log(weather)
     }


    useEffect(() => {
        getWeather();
    },[])

    useEffect(() => {
        console.log(weather)
    },[weather])
    
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col>
                        <Jumbotron fluid>
                            <h1> Weather App </h1>
                            <p>This will be a simple weather application!</p>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Weather;