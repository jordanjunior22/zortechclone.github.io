import React from 'react'
import './Services.css'

function Services() {
  return (
    <div className='services' id='services_id'>
      <div className='title'>
        <h3>OUR SERVICES</h3>
      </div>
      <div className='features'>
        
        <div className='staff_recruit'>
            <h3>STAFFING & RECRUITMENT</h3>
            <p>ZORTech provides the industry’s most innovative and 
                effective approaches to recruitment services and HR 
                consulting. We use our best industry experience, 
                best practices and the best technology to deliver
                outstanding results.</p>
        </div>

        <div className='industry_specialism'>
            <h3>STAFFING & RECRUITMENT</h3>
            <ul>
                <li>Information Technology</li>
                <li>IT Engineering</li>
                <li>Services</li>
                <li>Sales & Marketing</li>
            </ul>
        </div>
        <div className='empty'>
            <ul>
                <li>IT Infrastructure</li>
                <li>Banking & Financial services</li>
                <li>Manufacturing</li>
            </ul>
        </div>

      </div>

      <button>Know More</button>

    </div>
  )
}

export default Services
