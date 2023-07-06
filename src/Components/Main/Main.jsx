import React from 'react';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const Main = () => {
    return (
        
         
          <div>

            <Navbar></Navbar>
            <Home></Home>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
          </div>
      
    );
};

export default Main;