import React, { useState } from 'react';
import Container from '../Container/Container';
import { Zoom } from 'react-awesome-reveal';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import bg from '.././../assets/projectbg.png'
import crown from '.././../assets/crown.png'
import toycar from '.././../assets/toycar.png'
import chef from '.././../assets/chef.png'
import g3art from '.././../assets/g3art.png'
import './Projects.css'

const Projects = () => {
    const [count, setCount] = useState(false)
    return (
        <div id='project' className='my-20'>
            <Container>
                <div className='md:mt-32 mb-14 md:text-left text-center'>
                    <p className='text-amber-800 font-semibold'>PROJECT</p>
                    <h2 className='text-4xl font-extrabold'>
                        <Zoom cascade direction={"down"} duration={100}>Top Projects</Zoom></h2>
                </div>
                <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}>
                    <div>
                        {
                            count && <>
                                <div data-aos='fade-up' style={{ backgroundImage: `url(${bg})` }} className='md:flex justify-around py-5'>
                                    <div style={{ background: 'rgb(7, 89, 133)' }} className='w-2/8 text-center text-white p-10 border-2' >
                                        <CountUp className='text-xl font-bold' start={0} end={20} duration={2} delay={1}></CountUp>
                                        <h3 className='text-xl font-bold'>complete projects</h3>
                                    </div>
                                    <div style={{ background: 'rgb(7, 89, 133)' }} className='w-2/8 text-center text-white p-10 border-2' >
                                        <CountUp className='text-xl font-bold' start={0} end={3} duration={1} delay={1}></CountUp>
                                        <h3 className='text-xl font-bold'>working projects</h3>
                                    </div>
                                    <div style={{ background: 'rgb(7, 89, 133)' }} className='w-2/8 text-center text-white p-10 border-2' >
                                        <CountUp className='text-xl font-bold' start={0} end={3} duration={1} delay={1}></CountUp>
                                        <h3 className='text-xl font-bold'>Awards Won</h3>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </ScrollTrigger>

                <div className='md:grid md:grid-cols-2 mt-28'>
                    <div data-aos='fade-right' className='img2'>
                        <div style={{ backgroundImage: `url(${chef})`, backgroundSize:'cover', }} className='hoverimg1 border md:h-[250px] md:w-11/12 md:mr-4' >
                        </div>
                    </div>
                    <div data-aos='fade-left' className='img2'>
                        <div style={{ backgroundImage: `url(${toycar})`, backgroundSize: 'cover' }} className='hoverimg1 border md:h-[250px] md:w-11/12'>
                        </div>
                    </div>
                    <div data-aos='fade-right' className='img2'>
                        <div style={{ backgroundImage: `url(${g3art})`, backgroundSize: 'cover' }} className='hoverimg1 border md:h-[250px] md:w-11/12'>
                        </div>
                    </div>
                    <div data-aos='fade-left' className='img2'>
                        <div style={{ backgroundImage: `url(${crown})`, backgroundSize: 'cover' }} className='hoverimg1 border md:h-[250px] md:w-11/12'>
                        </div>

                    </div>
                </div>

            </Container>
        </div>
    );
};

export default Projects;