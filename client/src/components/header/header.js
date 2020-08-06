import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
// import "./header.css"

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="#home">Botham React Practice</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          {/* <Nav.Link href="/about-us">Contact Us</Nav.Link>
        <Nav.Link href="/contact-us">About Us</Nav.Link> */}
          <NavDropdown title="" id="nav-dropdown-align-right">
            <NavDropdown.Item href="/weatherApp">WeatherApp</NavDropdown.Item>
            {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
