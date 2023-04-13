import React from 'react'
import './Header.css'
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Navbar from './Navbar';
import { Link } from 'react-scroll';

function Header() {
  const [click, setClick] = useState(false);
  const hanleClick = () => setClick(!click)
  const CloseMenu = () =>setClick(false);
  return (
    <div className='header' id='home_id'>
        <Navbar/>
      <p>Empowering growth with real data</p>

      <Link to='contact_id' spy={true} smooth={true}  offset={50} duration={500} onClick={CloseMenu}>
      <button>Contact Us</button>
      </Link>
    
     
      <Link to='services_id'>
      <ExpandMoreIcon className='expand_more'/>
      </Link>
      
      
    </div>
  )
}

export default Header
