import React from "react";
import "../weather.css";
import { Row, Col, Card } from "react-bootstrap";
import wx from "../weatherFunctions";

function Now({ data }) {
  return (
    <div>
      <Card className="text-center rounded Card">
        <Card.Body>
          <Row className="my-auto">
            <Col className="textNow">
              <p className="city">
                {data.local.locality},{" "}
                {data.local.region_code}
              </p>
              <p className="condition">
                {wx.capitalize(data.weather.current.weather[0].description)}{" "}
              </p>
              <span className="temp">{wx.temp(data.weather.current.temp)}</span>
              <p className="feelsLike">
                Feels like {wx.temp(data.weather.current.feels_like)}
              </p>
            </Col>

            <Col className="text-center">
              <img
                alt="Weather Icon"
                className="responsiveIMG"
                src={wx.weatherIcon(
                  data.weather.current.weather[0].icon,
                  "large"
                )}
              ></img>
              <p className="highLow">
                {wx.temp(data.weather.daily[0].temp.max)} /{" "}
                {wx.temp(data.weather.daily[0].temp.min)}
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Now;
