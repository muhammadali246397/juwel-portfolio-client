import React from 'react';
import Container from '../Container/Container';
import { Zoom } from 'react-awesome-reveal';

const Projects = () => {
    return (
        <div id='project' className='my-20'>
            <Container>
                <div className='md:mt-32 mb-14 md:text-left text-center'>
                    <p className='text-amber-800 font-semibold'>PROJECT</p>
                    <h2 className='text-4xl font-extrabold'>
                        <Zoom cascade direction={"down"} duration={100}>Top Projects</Zoom></h2>
                </div>

            </Container>
        </div>
    );
};

export default Projects;