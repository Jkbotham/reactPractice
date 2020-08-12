import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./pages.css";
import Header from "../header/header";

function mainPage() {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col>
            <h1> Main Page </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default mainPage;
