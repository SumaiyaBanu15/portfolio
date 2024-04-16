import React from 'react';
import './styles.css';
import PageHeaders from '../../common/pageHeader/PageHeaders';
import { BsInfoCircleFill } from 'react-icons/bs';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { educationData } from './data';
import { FaBook } from 'react-icons/fa';


function EducationPage() {
  return<>
    <section id="education" className="education">
    <PageHeaders 
    headerText = "Education"
    icon = {<BsInfoCircleFill size={20}/>} />

    <div className="timeline">
      <div className="timeline_certification">
        <h3 className='timeline_title'> Certification </h3>
        <VerticalTimeline layout={'1-column'}
        lineColor='var(--mainColor)'>
          <div className="course_data">
            {
              educationData.certification.map((item, i)=>(
                <VerticalTimelineElement key={i}
                className='data_certicate'
                contentStyle={{
                  background: 'none',
                  color: "var(--textColor)",
                  border: '1.5px solid var(--mainColor)'
                }}
                icon={ <FaBook  size={20}/>}
                iconStyle={{
                  background: 'var(--navBgColor)',
                  color:'var(--mainColor)'
                }}
                >
                  <div className="vertical_timeline">
                    <h3 className='timeline_h3'>
                      {item.title}
                    </h3>
                    <h4 className='timeline_h4'>
                      {item.institution}
                    </h4>
                  </div>
                  <p style={{fontSize:'11px'}}>{item.desription}
                  </p>
                  <p style={{fontSize:'10px'}}>{item.time}</p>

                </VerticalTimelineElement>

             )) 
            }
          </div>
        </VerticalTimeline>
      </div>
      <div className="timeline_degree">
        <h3 className='timeline_title'> Degree </h3>
        <VerticalTimeline layout={'1-column'}
        lineColor='var(--mainColor)'>
          <div className="course_data">
            {
              educationData.degree.map((item, i)=>(
                <VerticalTimelineElement key={i}
                className='data_certicate'
                contentStyle={{
                  background: 'none',
                  color: "var(--textColor)",
                  border: '1.5px solid var(--mainColor)'
                }}
                
                icon={ <FaBook />}
                iconStyle={{
                  background: 'var(--navBgColor)',
                  color:'var(--mainColor)'
                }}>
                  <div className="vertical_timeline">
                    <h3 className='timeline_h3'>
                      {item.title}
                    </h3>
                    <h4 className='timeline_h4'>
                      {item.institution}
                    </h4>
                  </div>
                  <p style={{fontSize:'11px'}}>{item.desription}
                    </p>
                    <p style={{fontSize:'10px'}}>{item.time}</p>

                </VerticalTimelineElement>

             )) 
            }
          </div>
        </VerticalTimeline>
      </div>
    </div>
  </section>
  </>
}

export default EducationPage