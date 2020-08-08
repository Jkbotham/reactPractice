import React, { useState } from "react";
import "../weather.css";
import { Row, Col, Card, Image, Accordion, Button } from "react-bootstrap";
import wx from "../weatherFunctions";
import "../weather.css";

function Daily({ data }) {
  const [expand, setExpand] = useState("Show More");

  function handleClick() {
    // if (expand === "Show More") {
    //   setExpand("Show Less");
    // } else {
    //   setExpand("Show More");
    // }

    expand === "Show More" ? setExpand("Show Less") : setExpand("Show More");

    document.getElementById("daily").scrollIntoView({ behavior: "smooth" });
  }

  function hourly(obj, index) {
    if (index < 17) {
      return (
        <Row className="hourlyRow" key={obj.dt}>
          <Col xs={2} className="hourlyCol">
            <p>{wx.getTime(obj.dt)}</p>
          </Col>
          <Col xs={1} className="hourlyCol">
            <p>{wx.temp(obj.temp)}</p>
          </Col>
          <Col className="hourlyImgCol hourlyCol">
            <Image
              className="hourlyImg"
              src={wx.weatherIcon(obj.weather[0].icon)}
              alt={wx.capitalize(obj.weather[0].description)}
            />
            {wx.capitalize(obj.weather[0].description)}
          </Col>
          <Col xs={1} className="hourlyCol">
            <span>{wx.pop(obj.pop)}</span>
          </Col>
          <Col xs={3} className="hourlyCol">
            <p>
              {wx.windDirection(obj.wind_deg)} {obj.wind_speed.toFixed()} mph
            </p>
          </Col>
        </Row>
      );
    } else {
      return (
        <Accordion.Collapse eventKey="0" key={obj.dt}>
          <Row className="hourlyRow">
            <Col xs={2} className="hourlyCol">
              <p>{wx.getTime(obj.dt)}</p>
            </Col>
            <Col xs={1} className="hourlyCol">
              <p>{wx.temp(obj.temp)}</p>
            </Col>
            <Col className="hourlyImgCol hourlyCol">
              <Image
                className="hourlyImg"
                src={wx.weatherIcon(obj.weather[0].icon)}
                alt={wx.capitalize(obj.weather[0].description)}
              />
              {wx.capitalize(obj.weather[0].description)}
            </Col>
            <Col xs={1} className="hourlyCol">
              <span>{wx.pop(obj.pop)}</span>
            </Col>
            <Col xs={3} className="hourlyCol">
              <p>
                {wx.windDirection(obj.wind_deg)} {obj.wind_speed.toFixed()} mph
              </p>
            </Col>
          </Row>
        </Accordion.Collapse>
      );
    }
  }

  return (
    <div id="hourly">
      <Card className="text-center rounded Card">
        <Card.Body>
          <Row className="my-auto">
            <Col>
              <Accordion>
                {data.weather.hourly.map((results, index) => {
                  return hourly(results, index);
                })}
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="0"
                  onClick={handleClick}
                >
                  {expand}
                </Accordion.Toggle>
              </Accordion>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Daily;
