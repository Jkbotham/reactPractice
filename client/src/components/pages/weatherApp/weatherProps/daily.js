import React from "react";
import "../weather.css";
import { Row, Col, Card } from "react-bootstrap";
import wx from "../weatherFunctions";

function Daily({ data }) {
  function DailyWeather(obj, index) {
    let day = "Today";
    if (index > 0) {
      day = wx.getDate(obj.dt);
    }

    if (index < 5) {
      return (
        <Col key={index}>
          <Row>
            <Col>
              <strong>{day}</strong>
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                alt={obj.weather[0].description}
                src={wx.weatherIcon(obj.weather[0].icon)}
                className="dailyImg"
              ></img>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="dailyText">
                {wx.temp(obj.temp.max)} / {wx.temp(obj.temp.min)}
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="dailyText">{wx.pop(obj.pop)}</Col>
          </Row>
        </Col>
      );
    }
  }

  return (
    <div id="daily">
      <Card className="text-center rounded Card">
        <Card.Body id="dailyCard">
          <Row className="my-auto overflow">
            {data.weather.daily.map((obj, index) => {
              return DailyWeather(obj, index);
            })}
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Daily;
