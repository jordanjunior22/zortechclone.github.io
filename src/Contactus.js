import React from 'react'
import './Contactus.css'

function Contactus() {
  return (
    <div className='contactus' id='contact_id'>
    
    <form className='contactus'>
        <input type='text' placeholder='Name'/>
        <input type='email' placeholder='Email'/>
        <input type='text' placeholder='Subject'/>
        <input type='text' placeholder='Phone'/>
        <input type='text' placeholder='Adress'/>
        <input type='textarea' placeholder='Your Message'/>

        <button type='submit'>Send</button>
    </form>
      

    </div>
  )
}

export default Contactus
