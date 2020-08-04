import React from "react";
import "../weather.css";
import { Row, Col, Card, Image, Accordion, Button } from "react-bootstrap";
import wx from "../weatherFunctions";
import "../weather.css"


const style = {
    row: {
        height: "50px"
    },
    img: {
        width: "49px",
        height: "auto"
    },
    col: {
        margin: "auto"
    }
}

function Daily({ data }) {

    function hourly(obj) {

        return (
            <Row style={style.row} key={obj.dt}>
                <Col style={style.col} xs={2}>
                    <span>{wx.getTime(obj.dt)}</span>
                </Col>
                <Col style={style.col} xs={2}>
                    <p>{wx.temp(obj.temp)}</p>
                </Col>
                <Col style={style.col} className="hourlyImg">
                    <Image
                        fluid style={style.img}
                        src={wx.weatherIcon(obj.weather[0].icon)}
                        alt={wx.capitalize(obj.weather[0].description)}
                    />
                    {wx.capitalize(obj.weather[0].description)}
                </Col>
                <Col style={style.col} xs={2}>
                    <span>{wx.pop(obj.pop)}</span>
                </Col>
                <Col style={style.col} xs={2}>
                    <p>{wx.windDirection(obj.wind_deg)} {obj.wind_speed.toFixed()} mph</p>
                </Col>
            </Row>
        )
    }

    return (
        <div>
            <Card className="text-center rounded Card">
                <Card.Body>
                    <Row className="my-auto">
                        <Col>

                            {data.weather.hourly.map((results, index) => {
                                // console.log(index)
                                return hourly(results)
                            })}

                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Accordion>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">Expand</Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <p>Hello! I'm the body</p>
                                </Accordion.Collapse>
                            </Accordion>

                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Daily;