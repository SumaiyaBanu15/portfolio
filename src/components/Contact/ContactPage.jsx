import React, { useRef, useState } from 'react';
import './styles.css';
import PageHeaders from '../../common/pageHeader/PageHeaders';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import emailjs from "emailjs-com";


function ContactPage() {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_65jn9hb', 'template_ys84u9s', form.current, 'j7rnxtLY4tNXRuQH8')
    .then((result) =>{
      console.log(result.text);
      window.alert("Your message has been sent successfully!")
    }, (error) => {
      console.log(error.text)
    });

    e.target.reset();
  }
  return <>
    <section id="contact" className="contact">
    <PageHeaders 
    headerText = "Contact"
    icon = {<BsInfoCircleFill size={20}/>} />

    <div className="contact_content">
      <Animate play
      duration={1}
      delay={0}
      start={{
        transform:"translateX(-200px)"
      }}
      end={{
        transform: "translateX(0px)"
      }} >
        <h3 className='contact_h3'> Let's Talk </h3>
      </Animate>
      <Animate play
      duration={1}
      delay={0}
      start={{
        transform:"translateX(200px)"
      }}
      end={{
        transform: "translateX(0px)"
      }} >
        <div className="contact_form">
          <form ref={form} onSubmit={sendEmail}>
          <div className='form_container'>
          <div>
            <input type="text" name='from_name' className='inputname' required/>
            <label htmlFor='name' className='nameLabel'>Name</label>
          </div>

          <div>
          <input type="email" name='from_email' className='inputemail' required/>
            <label htmlFor='email' className='emailLabel'>Email</label>
          </div>

          <div>
          <textarea name='message' className='inputarea' required></textarea>
            <label htmlFor='textarea' className='textLabel'>Comments</label>
          </div>
        
        </div>
        <div className='icon_link'>
        <button>Submit</button>
         <div className='media_link'>
         <a href="https://github.com/SumaiyaBanu15" target="_blank" rel="noopener noreferrer">
          <AiFillGithub size={30} color='var(--mainColor)' style={{ marginRight: '10px' }} />
          </a>
          <a href="https://www.linkedin.com/in/sumaiya-banu-840710250" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin  size={30} color='var(--mainColor)'/>
          </a>
          </div>
        </div>
        </form>
        </div>
      </Animate>
      
    </div>
  </section>

  </> 
}

export default ContactPage