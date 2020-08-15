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
            <h1> Home Page </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Jumbotron>
              <Row>
                <Col>
                  <Card>
                    <Card.Link href="/weatherApp">
                      <Card.Img
                        variant="bottom"
                        className="mainPageImg"
                        src={imgWeatherApp}
                      />
                      <Card.Title>Weather App</Card.Title>
                    </Card.Link>

                    {/* <p>Weather App</p>
                    <a href="/weatherApp" className="mainPageImgLink">
                      <Image
                        className="mainPageImg"
                        alt="Screenshot of weather app page"
                        src={imgWeatherApp}
                        href="/weatherApp"
                      ></Image>
                    </a> */}
                  </Card>
                </Col>
              </Row>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default mainPage;
