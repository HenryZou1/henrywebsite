import * as React from "react"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => (
  <header>
     <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Henry Zou</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="">About</Nav.Link>
            <Nav.Link href="">Work</Nav.Link>
            <Nav.Link href="">GitHub</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  </header>
)

export default Header
