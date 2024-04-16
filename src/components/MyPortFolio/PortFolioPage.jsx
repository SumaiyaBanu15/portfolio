import React from 'react';
import './styles.css';
import PageHeaders from '../../common/pageHeader/PageHeaders';
import { BsInfoCircleFill } from 'react-icons/bs';

function PortFolioPage() {
  return <>
    <section id="portfolio" className="portfolio">
    <PageHeaders 
    headerText = "Portfolio"
    icon = {<BsInfoCircleFill size={30}/>} />
  </section>
  </>
}

export default PortFolioPage