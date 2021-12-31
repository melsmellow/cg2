import React from "react";
import {Navbar, Container,  Nav, NavDropdown} from 'react-bootstrap';

import '../App.css'

function AppNavBar() {
  return ( 
   <Navbar fixed="top"collapseOnSelect expand="lg" id="navbar" variant="dark">
      <Container id="navContainer">
      <Navbar.Brand href="#home">Company Name</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link active href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link active href="#pricing">Feature2</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Feature1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Feature2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Feature3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNavBar;