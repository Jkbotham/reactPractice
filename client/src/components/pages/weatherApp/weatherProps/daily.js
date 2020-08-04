import React from "react";
import "../weather.css";
import { Row, Col, Card } from "react-bootstrap";
import wx from "../weatherFunctions";

function Daily({ data }) {

    return (
        <div>
            <Card className="text-center rounded Card">
                <Card.Body>
                    <Row className="my-auto">

                        <Col>
                            <Row>
                                <Col>
                                    <strong>Today</strong>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img alt={data.weather.daily[0].weather[0].description} src={wx.weatherIcon(data.weather.daily[0].weather[0].icon)}></img>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>{wx.temp(data.weather.daily[0].temp.max)} / {wx.temp(data.weather.daily[0].temp.min)}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    {wx.pop(data.weather.daily[0].pop)}
                                </Col>
                            </Row>
                        </Col>

                        <Col>
                            <Row>
                                <Col>
                                    <strong>{wx.getDate(data.weather.daily[1].dt)}</strong>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img alt={data.weather.daily[1].weather[0].description} src={wx.weatherIcon(data.weather.daily[1].weather[0].icon)}></img>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>{wx.temp(data.weather.daily[1].temp.max)} / {wx.temp(data.weather.daily[1].temp.min)}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    {wx.pop(data.weather.daily[1].pop)}
                                </Col>
                            </Row>
                        </Col>

                        <Col>
                            <Row>
                                <Col>
                                    <strong>{wx.getDate(data.weather.daily[2].dt)}</strong>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img alt={data.weather.daily[2].weather[0].description} src={wx.weatherIcon(data.weather.daily[2].weather[0].icon)}></img>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>{wx.temp(data.weather.daily[2].temp.max)} / {wx.temp(data.weather.daily[2].temp.min)}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    {wx.pop(data.weather.daily[2].pop)}
                                </Col>
                            </Row>
                        </Col>

                        <Col>
                            <Row>
                                <Col>
                                    <strong>{wx.getDate(data.weather.daily[3].dt)}</strong>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img alt={data.weather.daily[3].weather[0].description} src={wx.weatherIcon(data.weather.daily[3].weather[0].icon)}></img>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>{wx.temp(data.weather.daily[3].temp.max)} / {wx.temp(data.weather.daily[3].temp.min)}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    {wx.pop(data.weather.daily[3].pop)}
                                </Col>
                            </Row>
                        </Col>

                        <Col>
                            <Row>
                                <Col>
                                    <strong>{wx.getDate(data.weather.daily[4].dt)}</strong>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img alt={data.weather.daily[4].weather[0].description} src={wx.weatherIcon(data.weather.daily[4].weather[0].icon)}></img>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>{wx.temp(data.weather.daily[4].temp.max)} / {wx.temp(data.weather.daily[4].temp.min)}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    {wx.pop(data.weather.daily[4].pop)}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Daily;