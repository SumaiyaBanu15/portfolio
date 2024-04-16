import React from 'react';
import './styles.css';
import PageHeaders from '../../common/pageHeader/PageHeaders';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';


function ContactPage() {
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
          <div className='form_container'>
          <div>
            <input type="text" name='name' className='inputname' required/>
            <label htmlFor='name' className='nameLabel'>Name</label>
          </div>

          <div>
          <input type="email" name='email' className='inputemail' required/>
            <label htmlFor='email' className='emailLabel'>Email</label>
          </div>

          <div>
          <textarea name='textarea' className='inputarea' required></textarea>
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
        </div>
      </Animate>
      
    </div>
  </section>
  </> 
}

export default ContactPage