import React from 'react'
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer pt-3">
      <Container>
        <Row className="align-items-center justify-content-md-center">
         
          <Col size={12} sm={12} className="text-center align-items-center">
            <div className="social-icon p-3">

            <a href="https://www.linkedin.com/in/steven-dytewski/" target="_blank"><img src={navIcon1} alt="" /></a>
              <a href="https://www.facebook.com/steve.dytewski/" target="_blank"><img src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/stevewave80/" target="_blank"><img src={navIcon3} alt="" /></a>
              {/* <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a> */}
            </div>
            <p className="text-center pt-3 pb-3">Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}



export default Footer