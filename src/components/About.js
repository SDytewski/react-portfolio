import { Container, Row, Col } from "react-bootstrap";
import React from "react";

export const About = ({ text, image, git }) => {
    return (
        <section className="skill mt-5 pt-5">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2 className="mb-4">About</h2>
                        
                       <img src="/images/steven3.jpg"></img>

                        <p>I studied Full-Stack Web Development at UCSD Extension. Since completing my certification, I've created projects focusing on the Front-End. I love making websites that look great on all devices! I'm open to new projects.</p>                           
                            
                        <p>Hobbies include guitar, singing, volleyball and running</p>
                      
                    </div>
                </div>
            </div>
        </div>
  
    </section>
      )
    }
    


export default About;