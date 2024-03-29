import { useState, useEffect } from 'react';
import { Navbar, Nav, Container }  from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import NavDropdown from 'react-bootstrap/NavDropdown';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller, } from 'react-scroll'


export const NavBar = () => {
const[activeLink, setActiveLink ] = useState('home');
const [scrolled, setSrcolled ] = useState(false);

useEffect(() => {
  const onScroll = () => {
    if  (window.scrollY > 50) {
      setSrcolled(true);
    } else {

      setSrcolled(false);

    }
  }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll)
}, [])



const onUpdateActiveLink = (value) => {
  setActiveLink(value);
}


const [expanded, setExpanded] = useState(false);
 return (
    <Navbar expanded={expanded} expand="md" className={scrolled ? "scrolled": ""}>
      <Container>
        {/* <Navbar.Brand href="/">
          <img src={''} alt="Logo" />
        
        </Navbar.Brand> */}
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
         </Navbar.Toggle> 
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link' } onClick={() => {setExpanded(false); onUpdateActiveLink('home')}}>HOME</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link' } onClick={() => {setExpanded(false); onUpdateActiveLink('skills')}}>SKILLS</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link' } onClick={() => {setExpanded(false); onUpdateActiveLink('projects')}}>PROJECTS</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link' } onClick={() => {setExpanded(false); onUpdateActiveLink('about')}}>ABOUT</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link' } onClick={() => {setExpanded(false); onUpdateActiveLink('contact')}}>CONTACT</Nav.Link>
            {/* <Nav.Link href="#portfolio.html">Portfolio</Nav.Link> */}
            {/* <Nav.Link href="#contact.html">Contact</Nav.Link> */}
          
            <Nav.Link href="https://github.com/SDytewski?tab=repositories" target="_blank" className={activeLink === 'GitHub' ? 'active navbar-link' : 'navbar-link' } onClick={() => {setExpanded(false); onUpdateActiveLink('home')}}>Github</Nav.Link>
            {/* <Nav.Link href="https://www.linkedin.com/in/steven-dytewski/" target="_blank">LinkedIn</Nav.Link> */}
            {/* <Nav.Link href="https://github.com/SDytewski?tab=repositories" target="_blank">Github</Nav.Link> */}
           
          </Nav>
          <span className="navbar-text">

            <div className="social-icon" >
              <a onClick={() => setExpanded(false)} href="https://www.linkedin.com/in/steven-dytewski/" target="_blank"><img src={navIcon1} alt="" /></a>
              {/* <a href="https://www.facebook.com/steve.dytewski/" target="_blank"><img src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/stevewave80/" ><img src={navIcon3} alt="" /></a> */}
            </div>
            {/* <HashLink to='#connect'> */}
            {/* <Button><span>Let's Connect</span></Button> */}
             

            {/* </Hashlink> */}
       
          </span>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

