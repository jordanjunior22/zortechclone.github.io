import React from 'react'
import './Whyus.css'
import Map from './Map'


function Whyus() {
  return (
    <div className='why_us'>
      <div className='title'>
        <h3>WHY US</h3>
      </div>
      
      <div className='content'>
        <p>At ZORTech, we pioneer in creating the best and amazing results to our clients, 
            consultants and resources by becoming trusted partners. We strongly believe and 
            consider our clients and consultants as extended partners and it is this ability of 
            “ZORians” which gives us an edge over others. This competency helps us win recurring business 
            from our clientele and in extending the relationship further to newer business association as well.</p>
        <p>We strive to create an environment which helps us to communicate precisely and concisely. 
            We bridge the gap that is prevalent in the market, provide a tailor-made solution which is 
            best suited for a defined purpose and emphasize in enhancing for better results. We push ourselves an 
            extra-mile and take pride in delivering the best quality in a stipulated time frame.</p>
      </div>

      <div className='title'>
        <h3>CONTACT US</h3>
      </div>

      <div className='map-container'>
        <Map/>
      </div>
      
    </div>
  )
}

export default Whyus
