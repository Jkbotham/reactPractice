import React, { useState, useEffect } from "react";
import Header from "../../header/header";
import {
  Row,
  Button,
  Col,
  Container,
  Jumbotron,
  Form,
  FormControl,
} from "react-bootstrap";
import api from "../../../utils/api";
import "./weather.css";
import WeatherNow from "./weatherProps/now";
import WeatherDaily from "./weatherProps/daily";
import WeatherHourly from "./weatherProps/hourly";
import LocationHeader from "./weatherProps/locationHeader";

function Weather() {
  //=====================================================
  // States and Variables
  //=====================================================

  const [apiResponse, setApiResponse] = useState();
  const [lat, setLat] = useState();
  const [lon, setLong] = useState();
  const [zipSearch, setZipSearch] = useState();
  const [locationArray, setLocationArray] = useState([]);
  const [currentLocation, setCurrentLocation] = useState();

  //=====================================================
  // Functions
  //=====================================================

  //Starts request for weather data using either the clients Lat & Lon or a zip code
  async function getWeather() {
    // Weather By Cords
    // console.log(zipSearch);
    if (!currentLocation) {
      if (lon && lat) {
        const weatherByCords = await api.weatherByCords(lat, lon);
        console.log("Weather by Cords ", weatherByCords.data);
        setApiResponse(weatherByCords.data);
      }
    } else {
      const weatherByZip = await api.weatherByZip(currentLocation);
      // console.log(weatherByZip);
      setApiResponse(weatherByZip.data);
    }
  }

  //Handles request when searching for weather using the search field
  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentLocation(zipSearch);
    setLocationArray((locationArray) => [...locationArray, zipSearch]);
  };

  useEffect(() => {
    // console.log(currentLocation);
    setZipSearch(currentLocation);
    getWeather();
  }, [currentLocation]);

  //=====================================================
  //  Use Effects
  //=====================================================

  useEffect(() => {
    const cords = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        // console.log("Latitude is :", position.coords.latitude);
        // console.log("Longitude is :", position.coords.longitude);
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
    };
    cords();
  }, []);

  useEffect(() => {
    console.log(currentLocation, "if lat or lon and !currentLocation");
    getWeather();
  }, [lon, lat]);

  const handleLocationRemove = (zip) => {
    setLocationArray(locationArray.filiter((item) => item !== zip));
  };

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
                  <Form
                    inline
                    className="text-right"
                    onSubmit={(e) => handleSubmit(e)}
                  >
                    <FormControl
                      onChange={(e) => setZipSearch(e.target.value)}
                      type="text"
                      placeholder="Zip Code"
                      className=" mr-sm-2"
                    />
                    {/* <Button type="submit">Submit</Button> */}
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col>
                  <LocationHeader
                    data={locationArray}
                    handleRemove={handleLocationRemove}
                    setCurrentLocation={setCurrentLocation}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  {apiResponse ? (
                    <div>
                      <WeatherNow data={apiResponse} />
                    </div>
                  ) : (
                    <p>No Weather to report</p>
                  )}
                </Col>
              </Row>
              <Row>
                <Col>
                  {apiResponse ? (
                    <div>
                      <WeatherDaily data={apiResponse} />
                    </div>
                  ) : (
                    <></>
                  )}
                </Col>
              </Row>
              <Row>
                <Col>
                  {apiResponse ? (
                    <div>
                      <WeatherHourly data={apiResponse} />
                    </div>
                  ) : (
                    <></>
                  )}
                </Col>
              </Row>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Weather;
