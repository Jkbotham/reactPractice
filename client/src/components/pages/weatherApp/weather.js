import React, { useState, useEffect } from "react";
import Header from "../../header/header";
import { Row, Button, Col, Container, Jumbotron } from "react-bootstrap";

function weather() {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col>
                        <Jumbotron fluid>
                            <h1> Weather App </h1>
                            <p>This will be a simple weather application!</p>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default weather;