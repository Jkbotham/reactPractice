import React from "react";
import "../weather.css";
import { Row, Col, Card } from "react-bootstrap";
import wx from "../weatherFunctions";

function Daily({ data }) {

    function DailyWeather(obj, index) {
        let day = "Today"
        if (index > 0) {
            day = wx.getDate(obj.dt)
        }

        if (index < 5) {
            console.log(index)
            return (
                <Col key={index}>
                    <Row>
                        <Col>
                            <strong>{day}</strong>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img alt={obj.weather[0].description} src={wx.weatherIcon(obj.weather[0].icon)}></img>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>{wx.temp(obj.temp.max)} / {wx.temp(obj.temp.min)}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {wx.pop(obj.pop)}
                        </Col>
                    </Row>
                </Col>
            )
        }
    }

    return (
        <div>
            <Card className="text-center rounded Card">
                <Card.Body>
                    <Row className="my-auto">

                        {data.weather.daily.map((obj, index) => {
                            return DailyWeather(obj, index)
                        })}

                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Daily;