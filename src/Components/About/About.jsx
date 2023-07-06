import React, { useEffect } from 'react';
import Container from '../Container/Container';
import juwel from '../../assets/juwel2.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Zoom } from 'react-awesome-reveal';
import ReactTypingEffect from 'react-typing-effect';
import { FaArrowDown, FaBookReader, FaDownload, FaEnvelope, FaGamepad, FaLocationArrow, FaMapMarkedAlt, FaPhoneAlt, FaRegCalendarAlt } from "react-icons/fa";



const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200
        });
    }, []);

    const handleDownload = () => {
        const downloadUrl = '/juwel-resume.pdf';
        window.location.href = downloadUrl;
      };

    return (
        <div id='about' className=''>
            
            <Container>

                <div className='mt-32 mb-14 md:text-left text-center'>
                    <p className='text-amber-800 font-semibold'>BIOGRAPHY</p>

                    <h2 className='text-4xl font-extrabold'>
                        <Zoom cascade direction={"down"} duration={100}>About Me</Zoom></h2>



                </div>



                <div className='md:flex md:space-x-20 justify-between'>

                    <div data-aos='fade-right' className=' md:w-3/5 md:p-0 p-4'>
                        <h2 className='text-2xl font-semibold'>Hi, I'm Mohammad Ali <br />  </h2>

                        <ReactTypingEffect typingDelay={100} eraseDelay={2000} speed={100} eraseSpeed={50} text={["Front End developer", "junior full stack web developer"]}

                            displayTextRenderer={(text, i) => {
                                return (
                                    <h1>
                                        {text.split('').map((char, i) => {
                                            const key = `${i}`;
                                            return (
                                                <span
                                                    key={key}
                                                    style={{ color: 'rgb(146 64 14)', fontSize: '24px' }}
                                                >{char}</span>
                                            );
                                        })}
                                    </h1>
                                )
                            }}>
                        </ReactTypingEffect>
                        <br />

                        <p className='my-8'>
                           Hi, I am juwel. I am a junior MERN stack web developer. I studied for a diploma in engineering in electronic technology. I have developed a strong passion for web development and have been actively pursuing it.  I learned a lot about programming and building websites. I also took online courses to improve my skills.
                        </p>
                        <div className='md:flex md:space-x-10'>
                            <div>
                                <p className='font-bold my-2 text-amber-800'><FaRegCalendarAlt className='inline space-x-4'></FaRegCalendarAlt> Birthday : <span className='font-semibold text-black'>01 December 1999</span> </p>
                                <p className='font-bold text-amber-800'><FaMapMarkedAlt className='inline space-x-4'></FaMapMarkedAlt> Location : <span className='font-semibold text-black'>Tangail, Dhaka, Bangladesh</span></p>
                                <p className='font-bold my-2 text-amber-800'><FaBookReader className='inline space-x-4'></FaBookReader> Study : <span className='font-semibold text-black'>Diploma In Engineering</span></p>
                                <p className='font-bold text-amber-800'><FaEnvelope
                                 className='inline space-x-4'></FaEnvelope> Email : <span className='font-semibold text-black'>juwel2463@gmail.com</span> </p>
                            </div>
                            <div>
                                <p className='font-bold my-2 text-amber-800'><FaRegCalendarAlt className='inline space-x-4'></FaRegCalendarAlt> Age : <span className='font-semibold text-black'>24</span> </p>
                                <p className='font-bold text-amber-800'><FaGamepad className='inline space-x-4'></FaGamepad> Interests : <span className='font-semibold text-black'> Reading, Codeing</span></p>
                                <p className='font-bold my-2 text-amber-800'><FaPhoneAlt className='inline space-x-4'></FaPhoneAlt> Phone : <span className='font-semibold text-black'>+8801957-119777</span></p>
                               
                            </div>
                            
                        </div>
                        <button onClick={handleDownload} className="btn bg-amber-800 rounded-none mt-5 hover:bg-amber-900 text-white">Download Resume <FaDownload></FaDownload></button>
                    </div>
                    <div data-aos='fade-left' className='md:w-2/5 h-auto'>
                        <img src={juwel} alt="" />
                    </div>
                </div>
            </Container >
            
        </div >
    );
};

export default About;
