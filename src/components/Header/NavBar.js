import React from 'react';
import { useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';




function Header() {
  const {activeLink, setActiveLink } = useState('home');
  const {scolled, setScolled } = useState(false);
  return (
    <Navbar className="color-nav" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={''} alt="Logo" />
        
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <span className="navbar-toggler-icon"></span>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projectss</Nav.Link>

            <Nav.Link href="portfolio.html">Portfolio</Nav.Link>
            <Nav.Link href="contact.html">Contact</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/steven-dytewski/" target="_blank">LinkedIn</Nav.Link>
            <Nav.Link href="https://github.com/SDytewski?tab=repositories" target="_blank">Github</Nav.Link>
          </Nav>
          <span className="navbar-text">

            <div className="social-icon">
              <a href="#"><img src={''} alt="" /></a>
              <a href="#"><img src={''} alt="" /></a>
              <a href="#"><img src={''} alt="" /></a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
          </span>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

