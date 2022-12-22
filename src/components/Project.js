import React from 'react'
import { Card } from 'react-bootstrap'

const Project = ({ project }) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <a href={`/project/${project._id}`}>
                 <Card.Img src={project.image} variant='top' />
            </a>
        
        <Card.Body>
            <a href={`/project/${project._id}`}>
                <Card.Title as='div'>
                    <strong>{project.name}</strong>
                </Card.Title>    
            </a>
           <Card.Text as='div'>{project.text}</Card.Text>
          
        </Card.Body>        
     </Card>
    )
 }

export default Project
