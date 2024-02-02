

// Navbar.jsx
import React from 'react';
import {Container , Navbar ,  Nav} from 'react-bootstrap';


function Navigation() {
  return (
  <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img alt="" src="../public/myntra.png" width="32" height="32" className="d-inline-block align-top"
            />{' '}
            Myntra
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Men">Men</Nav.Link>
            <Nav.Link href="#Women">Women</Nav.Link>
            <Nav.Link href="#Electronics">Electronics</Nav.Link>
          </Nav>




        </Container>
      </Navbar>
  
  
  
  </>
  );
}

export default Navigation;
