import React from 'react'
import { Card } from 'react-bootstrap'

const Project = ({ project }) => {
    return (
        <Card className='my-3 p-3 rounded'>

            <a href={`/project/${project._id}`}>
                 <Card.Img src={project.image} variant='top' />
            </a>
        </Card>

    )
 }

export default Project
