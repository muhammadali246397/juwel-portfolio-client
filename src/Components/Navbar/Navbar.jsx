import React, { useState } from 'react';
import Container from '../Container/Container';
import { Link } from 'react-scroll';
import './Navbar.css'
import { FaDownload } from 'react-icons/fa';


const Navbar = () => {
    const [Navbackground, SetNavbackground] = useState(false)
    
    const changeBackground = () => {
        if(window.scrollY >= 120){
            SetNavbackground(true)
        }else{
            SetNavbackground(false)
        }
    }

    window.addEventListener('scroll',changeBackground)
    
    const navitem = <>
        <li className='font-semibold text-amber-400 uppercase text-md'><Link className='hover:text-white' to='home' smooth={true} duration={500}>Home</Link></li>
        <li className='font-semibold text-amber-400 uppercase text-md'><Link className='hover:text-white' to='about' smooth={true} duration={500}>About</Link></li>
        <li className='font-semibold text-amber-400 uppercase text-md'><Link className='hover:text-white' to='skills' smooth={true} duration={500}>Skills</Link></li>
        <li className='font-semibold text-amber-400 uppercase text-md'><Link className='hover:text-white' to='project' smooth={true} duration={500}>Projects</Link></li>
        <li className='font-semibold text-amber-400 uppercase text-md'><Link className='hover:text-white' to='blogs' smooth={true} duration={500}>Blogs</Link></li>
        <li className='font-semibold text-amber-400 uppercase text-md'><Link className='hover:text-white' to='contact' smooth={true} duration={500}>Contact</Link></li>
    </>
     const handleDownload = () => {
        const downloadUrl = '/juwel-resume.pdf';
        window.location.href = downloadUrl;
      };
    return (


        <div className={`navbar  fixed z-30 ${Navbackground?'active':''}`}>
           

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 text-amber-400 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navitem}
                        </ul>
                    </div>
                    <button onClick={handleDownload} className="btn border-none my-auto rounded-none btn-ghost md:ms-36 normal-case text-xl font-bold text-amber-400 hover:text-white">Download Resume <FaDownload></FaDownload></button>
                   
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal md:me-36 px-1">
                        {navitem}
                    </ul>
                </div>
            </div>

       


    );
};

export default Navbar;