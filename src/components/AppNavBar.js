import React from "react";
import {Navbar, Container,  Nav, NavDropdown} from 'react-bootstrap';

import '../App.css'

function Home() {
  return ( 
   <Navbar collapseOnSelect expand="lg" id="navbar" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Company Name</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Feature1</Nav.Link>
          <Nav.Link href="#pricing">Feature2</Nav.Link>
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

export default Home;