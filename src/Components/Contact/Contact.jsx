import React, { useRef } from 'react';
import Container from '../Container/Container';
import { Fade, Zoom } from 'react-awesome-reveal';
import contact from '../../assets/contact.svg'
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_mtjfoke', 'template_gq7sfq8', form.current, 'Q9-FFAe_zfBoHhPeW')
        .then((result) => {
            alert('message send successfull')
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div id='contact' className='my-20'>
            <Container>
                <div className='md:mt-32 mb-14 md:text-left text-center'>
                    <p className='text-amber-800 font-semibold'>CONTACT</p>
                    <h2 className='text-4xl font-extrabold'>
                        <Zoom cascade direction={"down"} duration={100}>Get In Touch</Zoom></h2>
                </div>
                <div className='md:flex justify-between'>
                 
                  <div data-aos='fade-right' className='w-3/4 border-2 border-amber-800'>
                        <img style={{}} className='w-5/6' src={contact} alt="" />
                    </div>

                   <div data-aos='fade-left' className='w-3/4 md:ms-10'>
                        <div className=" w-full shadow-2xl bg-base-100">
                            <form  onSubmit={sendEmail} ref={form} className='card-body'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea type="text" name='message' placeholder="Message" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <input type='submit' value={'SEND MESSAGE'}  className="btn bg-amber-800 rounded-none hover:bg-amber-900 text-white border-none"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                
                </div>
            </Container>
        </div>
    );
};

export default Contact;