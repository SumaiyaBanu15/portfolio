import React, { useState } from 'react'
import './navbarstyles.css';
import { FaBars, FaReact } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';


const data = [
    {
        label:'Home',
        to: '/'
    },
    { 
        label:'About Me',
        to: '/aboutme'
    },
    { 
        label:'Skills',
        to: '/skills'
    },
    { 
        label:'Education',
        to: '/education'
    },
    { 
        label:'Port-Folio',
        to: '/portfolio'
    },
    { 
        label: 'Contact',
        to: '/contact'
    }
]

function Navbar() {

    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
      setToggleIcon(!toggleIcon);
    }
  return (
    <div>
        <nav className='navbar'>
            <div className='navbar_container'>
             <Link to={'/'} className='navbar_container_logo'>
             <FaReact  size={30}/>
             </Link>
            </div>
            <ul className={`navbar_container_menu ${toggleIcon ? "active" : ""}`}> {
                data.map((item, key)=>(
              <li key={key} className='navbar_container_menu_list'>
                <Link className='navbar_container_list_items_link' 
                to={item.to}
                onClick={()=> setToggleIcon(false)}>
                  {item.label}
                </Link>
              </li>
              )) 
            }
            </ul>

            <div className='nav-icons' onClick={handleToggleIcon}>
              {
                toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
              }
            </div>
        </nav>
    </div>
  )
}

export default Navbar