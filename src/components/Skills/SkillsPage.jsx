import React from 'react';
import './styles.css';
import PageHeaders from '../../common/pageHeader/PageHeaders';
import { BsInfoCircleFill } from 'react-icons/bs';
import { SkillsData } from './data';
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import { Line } from 'rc-progress';

function SkillsPage() {
  return<>
    <section id="skills" className="skills">
    <PageHeaders 
    headerText = "My Skills"
    icon = {<BsInfoCircleFill size={30}/>} />

    <div className="skills_content">
      {
        SkillsData.map((item,i)=>(
          <div key={i} className="skills_innercontent">
          <Animate play
          duration={1}
          delay={0.3}
          start={{
            transform: 'translateX(-200px)'
          }}
          end={{
            transform: 'translateX(0px)'
          }} >
            <h3 className='skills_h3'>{item.label}</h3>
            <div className='skills_data'>
              {
                item.data.map((skillsItems,index)=>(
                  <AnimateKeyframes play
                  duration={1}
                  keyframes={["opacity : 1", "opacity:0"]}
                  iterationCount="1">
                  <div className="skills_progressbar" key={index}>
                    <p>{skillsItems.skillName}</p>
                    <Line 
                    percent={skillsItems.percentage}
                    strokeWidth='2'
                    strokeColor="var(--mainColor)"
                    trailWidth="2"
                    trailColor='var(--textColor)'
                    strokeLinecap='square'
                    />
                  </div>
                  </AnimateKeyframes>
                ))
              }
            </div>
          </Animate>
          </div>
        ))
      }
    </div>
  </section>
  </>
}

export default SkillsPage