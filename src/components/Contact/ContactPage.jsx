import React from 'react';
import './styles.css';
import PageHeaders from '../../common/pageHeader/PageHeaders';
import { BsInfoCircleFill } from 'react-icons/bs';

function ContactPage() {
  return <>
    <section id="contact" className="contact">
    <PageHeaders 
    headerText = "Contact"
    icon = {<BsInfoCircleFill size={30}/>} />
  </section>
  </> 
}

export default ContactPage