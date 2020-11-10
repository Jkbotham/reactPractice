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
  const [locationArray, setLocationArray] = useState(
    JSON.parse(localStorage.getItem("weatherLocations")) || []
  );
  const [currentLocation, setCurrentLocation] = useState();

  //=====================================================
  // Functions
  //=====================================================

  //Starts request for weather data using either the clients Lat & Lon or a zip code
  const getWeather = async () => {
    // Weather By Cords
    if (!currentLocation) {
      if (lon && lat) {
        const weatherByCords = await api.weatherByCords(lat, lon);
        console.log("Weather by Cords ", weatherByCords.data);
        setApiResponse(weatherByCords.data);

        const locationInfo = {
          displayName:
            weatherByCords.data.local.city +
            ", " +
            weatherByCords.data.local.principalSubdivisionCode.split("-")[1],
          zipCode: weatherByCords.data.local.postcode,
        };

        if (
          !locationArray.some((obj) => obj.zipCode === locationInfo.zipCode)
        ) {
          setLocationArray((locationArray) => [...locationArray, locationInfo]);
        }
      }
    } else {
      const weatherByZip = await api
        .weatherByZip(currentLocation)
        .catch((err) => {
          console.log(err.response);
          return err;
        });

      if (weatherByZip.data) {
        console.log("Weather by zip", weatherByZip.data);
        setApiResponse(weatherByZip.data);

        const locationInfo = {
          displayName:
            weatherByZip.data.local.city +
            ", " +
            weatherByZip.data.local.principalSubdivisionCode.split("-")[1],
          zipCode: weatherByZip.data.local.postcode,
        };

        if (
          !locationArray.some((obj) => obj.zipCode === locationInfo.zipCode)
        ) {
          setLocationArray((locationArray) => [...locationArray, locationInfo]);
        }
      }
    }
  };

  //Handles request when searching for weather using the search field
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget.children[0].value);
    e.currentTarget.children[0].value = "";
    setCurrentLocation(zipSearch);
  };

  const handleLocationRemove = (e) => {
    // console.log(e.currentTarget.dataset.zip);
    const zip = e.currentTarget.dataset.zip;
    setLocationArray(locationArray.filter((item) => item.zipCode !== zip));
    if (currentLocation === zip && locationArray.length > 0) {
      setCurrentLocation(locationArray[0].zipCode);
    }
  };

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
    getWeather();
  }, [lon, lat]);

  useEffect(() => {
    // console.log(currentLocation);
    setZipSearch(currentLocation);
    getWeather();
  }, [currentLocation]);

  useEffect(() => {
    localStorage.setItem("weatherLocations", JSON.stringify(locationArray));
  }, [locationArray]);

  //=====================================================

  //=====================================================

  return (
    <div>
      <Header />
      <Row>
        <Col>
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
                <Button type="submit">
                  <i className="fas fa-search"></i>
                </Button>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              {locationArray.length > 0 ? (
                <LocationHeader
                  data={locationArray}
                  handleRemove={handleLocationRemove}
                  setCurrentLocation={setCurrentLocation}
                />
              ) : (
                <></>
              )}
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
        </Col>
      </Row>
    </div>
  );
}

export default Weather;
