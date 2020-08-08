import React, { useState } from "react";
import "../weather.css";
import { Row, Col, Card, Image, Accordion, Button, Nav } from "react-bootstrap";
import wx from "../weatherFunctions";
import "../weather.css";

function LocationHeader({ data, setCurrentLocation, handleRemove }) {
  const handleOnClick = (e) => {
    // console.log(e);
    setCurrentLocation(e);
  };

  const tab = (zip, index) => {
    return (
      <Nav.Item key={index}>
        <Nav.Link href="#" onClick={() => handleOnClick(zip)}>
          {zip}
        </Nav.Link>
      </Nav.Item>
    );
  };

  return (
    <Card className="text-center rounded Card">
      <Card.Body>
        <Row className="navRow">
          <Col className="navCol">
            <Nav variant="tabs" defaultActiveKey="/home">
              {data.map((results, index) => {
                return tab(results, index);
              })}
            </Nav>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default LocationHeader;
