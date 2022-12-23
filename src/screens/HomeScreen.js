import { Row, Col } from 'react-bootstrap'
import Project from '../components/Project'
import projects from '../projects'
import './HomeScreen.css'

const HomeScreen = () => {
    return (
        <>
            <h1>Latest Projects</h1>
            <Row className="projectContainer" >
                {projects.map((project) => (
                    <Col sm={12} md={6} lg={4} xl={3}>
                       <Project project={project} hello="hello" goodbye="goodbye" />
                    </Col>
                ))}
            </Row>
        </>        
               
     )    
}

export default HomeScreen