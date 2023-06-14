import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Projects = () => {


const projects = [

    {
  
      _id: '1',
      name: 'MA Taylor',
      image: '/images/blondehero.jpg',
      text: 'Wordpress, WooCommerce, Custom Theme, JavaScript, CSS',
      link: "http://mataylorshop.com/"
    },
  
    {
  
      _id: '2',
      name: 'California Counties',
      image: '/images/california.jpeg',
      text: 'JavaScript, CSS, Wikipedia API',
      link:"https://sdytewski.github.io/cali/index2.html"
    },
    {
  
      _id: '3',
      name: 'Steve Wave Music',
      image: '/images/stevewave2.png',
      text: 'React, Material UI, CSS',
      link: "https://stevewavemusic.com/"
    },
  
  ];
  

  return (
    // <section className="project pt-5 pb-5" id="projects">
   
         <section className="project mt-5 pt-5" id="projects">
        <div className="container">
            <div className="row">
                <div className="col-12">
                <div className="project-bx wow zoomIn">

       
        <Row>
          <Col size={12}>
             <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <h2 className="text-center">Projects</h2>
                <p  className="text-center">I specialize in React and JavaScript, but I've creatd projects using Ruby on Rails and Wordpress</p>
               {/* <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first"> */}
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    {/* </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container> */}
              </div>}
            </TrackVisibility> 
          </Col>
        </Row>
      </div>
      <img className="background-image-right"></img>
      </div>
      </div>
      </div>
    </section>
  )
}
