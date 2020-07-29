import React from "react";
import { Navbar, Nav, Row, Col } from "react-bootstrap";
// import "./header.css"



function Header() {
  return (

    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
    <Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about-us">Contact Us</Nav.Link>
        <Nav.Link href="/contact-us">About Us</Nav.Link>
        </Nav>
    </Navbar.Collapse>
</Navbar>
  )
}

export default Header;