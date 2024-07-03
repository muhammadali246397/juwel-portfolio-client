import React, { useEffect, useState } from 'react';
import Container from '../Container/Container';
import { Zoom } from 'react-awesome-reveal';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import bg from '.././../assets/projectbg.png'
import Modal from '../Share/Modal';

const Projects = () => {
    const [count, setCount] = useState(false)
    const [projects, setProject] = useState([])
    const [singleProject, setSingleProject] = useState('')
    
    useEffect(() => {
        fetch('http://localhost:3000/projects')
            .then(res => res.json())
            .then(data => setProject(data))
    }, [])
    const handleDetails = (id) => {
        fetch(`http://localhost:3000/singleProject/${id}`)
        .then(res => res.json())
        .then(data => setSingleProject(data))
    }
    return (
        <div id='project' className='my-20'>

            <Container>
                <div className='md:mt-10 mb-14 md:text-left text-center'>
                    <p className='text-amber-800 font-semibold'>PROJECT</p>
                    <h2 className='text-4xl font-extrabold'>
                        <Zoom cascade direction={"down"} duration={100}>Top Projects</Zoom></h2>
                </div>
            </Container>

            <div style={{ backgroundImage: `url(${bg})`, width:'100%', backgroundPosition:'fixed' }}>
                <Container>
                    <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}>
                        <div >
                            {
                                count && <>
                                    <div className='md:flex justify-around py-5'>
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
                </Container>
            </div>

            <Container>
                <div className='my-14'>

                    <div className=' md:grid md:grid-cols-3 gap-8'>
                        {
                            projects?.map((project, index) =>
                                <div key={index} data-aos='fade-up' data-aos-dealy="100" data-aos-once="true" className='img2 border p-4 shadow-md hover:shadow-lg rounded-lg  hover:translate-y-2 transition-all'>
                                    <img src={project?.image} alt="" />
                                    <div className='flex justify-between items-center'>
                                        <p className='font-xl font-bold mt-4'>{project?.title}</p>
                                        <a className='  no-underline text-blue-600' href={project?.liveLink}>Live Link</a>

                                    </div>
                                    <div className='h-[100px] pe-1 overflow-hidden'>{project?.overview}</div>
                                    <div>

                                        <button onClick={() => handleDetails(project._id)} className='w-full'><Modal projectDetails={singleProject?singleProject:'worng'} btnName='DETAILS'></Modal></button>
                                    </div>
                                </div>)
                        }



                    </div>


                </div>
            </Container>




        </div>
    );
};

export default Projects;