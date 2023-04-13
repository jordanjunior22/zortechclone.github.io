import React from 'react'
import './Footers.css'
import { Link } from 'react-scroll'
import { useState } from 'react';

function Footers() {
 const [click, setClick] = useState(false);
  const hanleClick = () => setClick(!click)
  const CloseMenu = () =>setClick(false);
  return (
    <div className='footer_div'>
        <div className='footer_logo'>
            <img src='https://static.wixstatic.com/media/cbef27_c7d037d3b5bd415499c2867accc2d805~mv2.png/v1/fill/w_395,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ZOR%20TECH%20PNG.png' alt=''/>
        </div>

        <div className='info_containers'>
            <div>
                <h3>Links</h3>

                <p><Link to='home_id' spy={true} smooth={true}  offset={0} duration={500} onClick={CloseMenu}>Home</Link></p>
                <p><Link to='about_id' spy={true} smooth={true}  offset={50} duration={500} onClick={CloseMenu}>About</Link></p>
                <p><Link to='services_id' spy={true} smooth={true}  offset={50} duration={500} onClick={CloseMenu}>Services</Link></p>
                <p><Link to='/' spy={true} smooth={true}  offset={50} duration={500} onClick={CloseMenu}>Careers</Link></p>
                <p><Link to='contact_id' spy={true} smooth={true}  offset={50} duration={500} onClick={CloseMenu}>Contact</Link></p>

            </div>

            <div>
                <h3>Our Locations</h3>

                <h3>Toronto Office:</h3>
                <p>25 Watline Avenue, suite 204,
                   Mississauga ON L4Z 2Z1
                   Direct: 647-709-2601</p>
               
                <h3>Houston Office:</h3>
                <p>8300 Cypress Pkwy, Suite 450,
                    Houston TX 77070</p>
            </div>

            <div>
                <h3>Socials</h3>

            </div>

        </div>
    </div>
  )
}

export default Footers
