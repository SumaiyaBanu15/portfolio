import React from 'react';
import './styles.css';
import {useNavigate} from 'react-router-dom';
import { Animate } from "react-simple-animate"

function HomePage() {

  const navigate = useNavigate();

  const handleContact = ()=>{
     navigate('/contact');
  }
  return <>
  <section id="home" className='home'>
    <div className="home_text-wrapper">
      <h1> Hello, I'm Sumaiya Banu
        <br/>
         Full Stack Developer
      </h1>
    </div>
  <Animate play duration={1.5}
  delay={1} start={{transform: 'translateY(550px'}} end={{transform: 'translateX(0px)'}}>
    <div className="home_contact-btn">
      <button onClick={handleContact}>Hire Me</button> 
      
      <button className='linkButton'><a href='https://drive.google.com/file/d/1oFEgiCGOlSzUBKDafny2Cn0Xrmy3Gkbh/view' target='_blank' rel="noreferrer" > Resume </a></button>
    
    </div>
  </Animate>
  </section>
  </>
}

export default HomePage