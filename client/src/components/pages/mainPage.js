import React, { useState, useEffect } from "react";
import { Row, Jumbotron, Button, Col, Container} from "react-bootstrap";
import { Link } from "react-router-dom"
import './pages.css';
import Header from "../header/header";



const style = {
    button: {
        margin: 0,
        display: "flex",
        justifyContent: "center"
    },
    Jumbotron: {
        marginTop: "25px",
        backgroundColor: "WhiteSmoke"
    }

}

function mainPage() {

    return (
        <div>
            <Header />
            
        </div>
    )
}

export default mainPage;