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

  const tab = (obj, index) => {
    return (
      <div className="zipTab" key={index}>
        <a
          className="zipTabText"
          href="#"
          onClick={() => handleOnClick(obj.zipCode)}
        >
          {obj.displayName}{" "}
        </a>
        <i
          className="fas fa-times"
          onClick={handleRemove}
          data-zip={obj.zipCode}
        ></i>
      </div>
    );
  };

  return (
    <Card className="text-center rounded Card">
      <Card.Body>
        <Row className="navRow">
          <Col className="navCol">
            <Nav variant="tabs" className="cardTabs" defaultActiveKey="/home">
              {/* {console.log(data)} */}
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
