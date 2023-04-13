import React from 'react';
import { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-scroll'
function Navbar() {
  const [click, setClick] = useState(false);
  const hanleClick = () => setClick(!click)
  const CloseMenu = () =>setClick(false);
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src='https://static.wixstatic.com/media/cbef27_c7d037d3b5bd415499c2867accc2d805~mv2.png/v1/fill/w_395,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ZOR%20TECH%20PNG.png' alt=''/>
        </div>

        <div className='nav_links'>
            
            <h3><Link to='home_id' spy={true} smooth={true}  offset={0} duration={500} onClick={CloseMenu}>Home</Link></h3>
            <h3><Link to='about_id' spy={true} smooth={true}  offset={50} duration={500} onClick={CloseMenu}>About</Link></h3>
            <h3><Link to='services_id' spy={true} smooth={true}  offset={50} duration={500} onClick={CloseMenu}>Services</Link></h3>
            <h3><Link to='/' spy={true} smooth={true}  offset={50} duration={500} onClick={CloseMenu}>Careers</Link></h3>
            <h3><Link to='contact_id' spy={true} smooth={true}  offset={50} duration={500} onClick={CloseMenu}>Contact</Link></h3>
        </div>
      
    </div>
  )
}

export default Navbar
