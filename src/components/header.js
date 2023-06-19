import * as React from "react"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => (
  <header>
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">Henry Zou</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/project">Project</Nav.Link>
          <Nav.Link href="/work">Work</Nav.Link>
          <Nav.Link
            href="https://github.com/HenryZou1?tab=repositories"
            target="_blank"
          >
            GitHub
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </header>
)

export default Header
