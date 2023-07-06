import React from 'react';
import Container from '../Container/Container';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{ background: 'rgb(7, 89, 133)' }} className='mt-20'>
            <Container>
                <footer className="footer items-center py-20 text-white">

                    <div className="items-center grid-flow-col">
                        <p className='md:text-left text-center'>Copyright © 2023 - All right reserved</p>
                    </div>
                    <div className="grid-flow-col md:text-left text-center gap-4 md:place-self-center md:justify-self-end">
                        <Link to={`https://www.facebook.com/profile.php?id=100021549764642`} className='text-4xl'><FaFacebook></FaFacebook></Link>
                        <Link to={`https://www.linkedin.com/in/mohammad-ali-37526b263/`} className=' text-4xl'><FaLinkedin></FaLinkedin></Link>
                        <Link to={`https://github.com/muhammadali246397`} className='text-4xl'><FaGithub></FaGithub></Link>
                    </div>

                </footer>
            </Container>
        </div>
    );
};

export default Footer;