import React, { useState } from 'react';
import './styles.css';
import PageHeaders from '../../common/pageHeader/PageHeaders';
import { BsInfoCircleFill } from 'react-icons/bs';
import AirbnbImg from '../../assets/AirBnbImgCopy.jpg';
import BlogImg from '../../assets/LapImg.jpg';
import PswdImg from '../../assets/PswImg.png';
import FoodImg from '../../assets/FoodImg.jpeg';
import TravelImg from '../../assets/travelImg.jpg';

const portfolioData = [
    {
        id: 2,
        name: "Airbnb Clone",
        image: AirbnbImg ,
        link: 'https://zingy-puppy-191dc4.netlify.app'
    },
    {
        id: 2,
        name: "Blog App",
        image:  BlogImg,
        link: 'https://keen-speculoos-9848ac.netlify.app'
    },
    {
        id: 2,
        name: "Password Reset Flow",
        image:  PswdImg,
        link: 'https://luminous-dolphin-1bd766.netlify.app'
    },
    {
        id: 3,
        name: "Travel Landing Page",
        image: TravelImg,
        link: 'https://hilarious-puffpuff-9a2e53.netlify.app' 
    },
    {
        id: 3,
        name: "Food Order Page",
        image: FoodImg,
        link: 'https://ubiquitous-malabi-51b99a.netlify.app'
    },
];

const filterData = [
  {
    filterId : 1,
    label : "All"
  },
  {
    filterId : 2,
    label : "Development"
  },
  {
    filterId : 3,
    label : "Design"
  }
];

function PortFolioPage() {

  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  const handleFilter = (currentId) => {
     setFilteredValue(currentId);
  }

  const filteredItem = filteredValue === 1 ? portfolioData : portfolioData.filter(item => item.id === filteredValue);

  const handleHover = (index)=>{
    setHoveredValue(index)
  }

  const handleVisitLink = (link) => {
    window.open(link, '_blank');
  }

  return <>
    <section id="portfolio" className="portfolio">
    <PageHeaders 
    headerText = "Portfolio"
    icon = {<BsInfoCircleFill size={20}/>} />
    <div className="portfolio_content">
      <ul className='portfolio_filter'>
        {
          filterData.map((item, index)=>(
            <li className={item.filterId === filteredValue ? 'active' : ''} onClick={() => handleFilter(item.filterId)} key={item.filterId}>
              {
                item.label
              }
            </li>
          ))
        }
      </ul>
      <div className='portfolio_cards'>
        {
          filteredItem.map((item,i)=>(
            <div className='cards_item' key= {`cardItem ${item.name.trim()}`}
            onMouseEnter={() => handleHover(i)}
            onMouseLeave={() => handleHover(null)} >
              <div className='cards_img'>
                <a>
                  <img src={item.image} alt='Project Img'/>
                </a>
              </div>
              <div className="cards_overlay">
                {
                  i === hoveredValue && (
                    <div>
                      <p>{item.name}</p>
                      <button onClick={()=> handleVisitLink(item.link)}>Visit</button>
                    </div>
                  )
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>

  </section>
  </>
}

export default PortFolioPage