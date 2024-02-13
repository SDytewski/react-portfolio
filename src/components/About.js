import { Container, Row, Col } from "react-bootstrap";
import React from "react";

export const About = ({ text, image, git }) => {
    return (
        <Col size={12} sm={6} md={6
        } className="pb-3">
          <div className="proj-imgbx">
          
            <div className="proj-txtx pt-3">
              <h4>About</h4>
              {/* <span>{description}</span> */}
              {/* <span id="proj-txt">{text}</span> */}
            </div>
            {/* <a href={git} target="_blank">Github</a> */}
          </div>
        </Col>
      )
    }
    


export default About;