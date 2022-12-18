import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




function Header(){
    return(
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Hammer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="index.html">Home</Nav.Link>
            <Nav.Link href="portfolio.html">Portfolio</Nav.Link>
            <Nav.Link href="contact.html">Contact</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/steven-dytewski/" target="_blank">LinkedIn</Nav.Link>
            <Nav.Link href="https://github.com/SDytewski?tab=repositories" target="_blank">Github</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;