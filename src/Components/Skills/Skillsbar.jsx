import React, { useEffect, useState } from 'react';
import './Skills.css'
import { Zoom } from 'react-awesome-reveal';

const Skillsbar = () => {
    const [skills, setSkills] = useState([
        { name: 'HTML', value:85 },
        { name: 'Css', value: 85 },
        { name: 'Bootstrap', value: 90 },
        { name: 'Tailwind', value:80 },
        { name: 'Javascript', value: 60 },
        { name: 'React Js', value: 70 },
        { name: 'Express Js', value: 60 },
        { name: 'Node Js', value: 55 },
        { name: 'MongoDB', value: 60 },
        { name: 'Next Js', value: 40 },
      ]);
    
      useEffect(() => {
        const animateProgressBars = (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const progressBars = entry.target.querySelectorAll('.progress');
              progressBars.forEach((progressBar) => {
                const targetWidth = progressBar.getAttribute('data-value');
                progressBar.style.width = `${targetWidth}%`;
              });
            }
          });
        };
    
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.5, 
        };
    
        const observer = new IntersectionObserver(animateProgressBars, options);
        const skillSections = document.querySelectorAll('.skills-section');
    
        skillSections.forEach((section) => observer.observe(section));
    
        return () => {
          observer.disconnect();
        };
      }, []);
    
      return (
        <div className='md:grid grid-cols-2 gap-10'>
            
          {skills.map((skill, index) => (
            
            <Zoom  key={index}>
              <div className="skills-section">
              <div className='text-2xl font-semibold text-amber-800'>{skill.name}</div>
              <div>{skill.value}%</div>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: '0%' }}
                  data-value={skill.value}
                ></div>
              </div>
            </div>
            </Zoom>
          ))}
        </div>
      );
    };
     
    export default Skillsbar;