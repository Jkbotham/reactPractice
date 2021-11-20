import React from "react";
import { Row, Col, Container, Jumbotron, Card, Image } from "react-bootstrap";
import "./pages.css";
import Header from "../header/header";
import imgWeatherApp from "../../assets/images/weatherApp.png";

function mainPage() {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col>
            {/* <h1> Home Page </h1> */}
          </Col>
        </Row>
        <Row>
          <Col>
            {/* <Jumbotron> */}
              <Row>
                <Col>
                  <Card className="appCard">
                    <Card.Link href="/weatherApp">
                      <Card.Img
                        variant="bottom"
                        className="mainPageImg"
                        src={imgWeatherApp}
                      />
                      <Card.Title>Weather App</Card.Title>
                    </Card.Link>
                  </Card>
                </Col>
                <Col>
                  <Card className="appCard">
                    <Card.Link href="/tipCalculator">
                      <Card.Img
                        variant="bottom"
                        className="mainPageImg"
                        src={imgWeatherApp}
                      />
                      <Card.Title>Tip Calculator</Card.Title>
                    </Card.Link>
                  </Card>
                </Col>
              </Row>
            {/* </Jumbotron> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default mainPage;
