import React from 'react';
import './styles.css';
import PageHeaders from '../../common/pageHeader/PageHeaders';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import { FaReact, FaHtml5, FaNodeJs, FaDatabase} from 'react-icons/fa'; 
import { SiBootstrap } from 'react-icons/si';

const personalDetails = [
  {
    label : "Name",
    value : ": Sumaiya Banu"
  },
  {
    label : "Email",
    value : ": sumaiyanishar115@gmail.com"
  },
  {
    label : "Address",
    value : ": Thanjavur"
  },

];

const jobSummary = "I am a passionate and enthusiastic full-stack developer seeking opportunities to contribute my skills to innovative projects. As a recent graduate with a deep interest in web development and a strong foundation in programming languages and frameworks, I'm eager to embark on my career journey and make a meaningful impact in the tech industry."

function AboutPage() {

  return <>
  <section id="about" className="about">
    <PageHeaders 
    headerText = "About Me"
    icon = {<BsInfoCircleFill size={20}/>} />

    <div className='about_content'>
      <div className="about_content_personal">

      <Animate play
      duration={1.5}
      delay={1}
      start={{
        transform:"translateX(-900px)"
      }}
      end={{
        transform:"translateY(0px)"
      }}>
      <p>{jobSummary}</p>
      </Animate>

      <h3>Personal Info</h3>
      <Animate play
      duration={1.5}
      delay={1}
      start={{
        transform:"translateX(500px)"
      }}
      end={{
        transform:"translateY(0px)"
      }}>
      
      <ul>{
      personalDetails.map((item,i)=>(
        <li key={i}>
          <span className='title'>{item.label}</span>
          <span className='value'>{item.value}</span>
        </li>
      ))}
      </ul>
      </Animate>

      </div>

      <div className="about_content_skills">
      <Animate play
      duration={1.5}
      delay={1}
      start={{
        transform:"translateX(600px)"
      }}
      end={{
        transform:"translateY(0px)"
      }}>
      
        <div className="iconCircle">
          <div> <FaReact size={40} color='var(--mainColor)'/> </div>
          <div> <FaHtml5 size={40} color='var(--mainColor)'/> </div>
          <div> <FaNodeJs size={40} color='var(--mainColor)'/> </div>
          <div> <FaDatabase size={40} color='var(--mainColor)'/> </div>
          <div> <SiBootstrap size={40} color='var(--mainColor)'/> </div>
        </div>
        </Animate>
      </div>

    </div>
  </section>
  </>
}

export default AboutPage