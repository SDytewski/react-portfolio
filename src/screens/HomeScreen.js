import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Project from '../components/Project'
import projects from '../projects'

const HomeScreen = () => {
    return (
        <>
            <h1>Latest Projects</h1>
            <Row>
                {projects.map((projects) => (
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <h3>{projects.name}</h3>
                    </Col>
                ))}
            </Row>
        </>        
               
     )    
}

export default HomeScreen