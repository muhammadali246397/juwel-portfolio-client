import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import Container from '../Container/Container';
import Skillsbar from './Skillsbar';


const Skills = () => {
    return (
        <div id='skills' className=' py-10 bg-slate-50'>
            <Container>
                <div className='md:mt-5 mt-18 mb-14 md:text-left text-center'>
                    <p className='text-amber-800 font-semibold'>SKILLS</p>

                    <h2 className='text-4xl font-extrabold'>
                        <Zoom cascade direction={"down"} duration={100}>My Skills</Zoom></h2>

                </div>
                <div>
                <Skillsbar></Skillsbar>
                </div>
            </Container>
        </div>
    );
};

export default Skills;