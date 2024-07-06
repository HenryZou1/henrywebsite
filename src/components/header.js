import * as React from "react"


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/header.css"
const Header = () => (
  <header>
    <Navbar bg="primary" data-bs-theme="dark" className="header">
      <Navbar.Brand href="/" className="logo">
        Henry Zou
      </Navbar.Brand>
      <Nav className="justify-content-end" style={{ width: "100%" }}>
        <Nav.Link href="/certification">Certifications</Nav.Link>
        <Nav.Link href="/project">Project</Nav.Link>
        <Nav.Link href="/work">Work</Nav.Link>
        <Nav.Link
          href="https://github.com/HenryZou1?tab=repositories"
          target="_blank"
        >
          GitHub
        </Nav.Link>
      </Nav>
    </Navbar>
  </header>
)

export default Header
