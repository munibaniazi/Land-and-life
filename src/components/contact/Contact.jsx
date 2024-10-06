import React, { useState } from 'react'
import Back from '../common/Back'
import img from "../images/pricing.jpg"
import "./contact.css"

const Contact = () => {
    
  return (
    <>
    <section className='contact mb'>
        <Back name="Contact Us" title="Get Help and Friendly Support" cover={img} />
        <div className="container">
            <div className="row">
                <h4>Our Location</h4>
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513.809373667214!2d79.15517597407819!3d28.273796500283385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ab3d25473b9a7%3A0x61550ff3ba221ae5!2sFARIDI%20MEDICAL%20STORE!5e0!3m2!1sen!2sin!4v1725115747396!5m2!1sen!2sin"></iframe>
            
            <form action='' className='shadow'>
                <h4>Fill up your details here.</h4>
                <div>
                    <input type='text' placeholder='Name' name='name' id='name'/>
                    <input type='text' placeholder='Email' name='email' id='' />
                </div>
                <input type='text' placeholder='Subject' name='subject' />
                <textarea name='message' id='para' cols="30" rows="10"></textarea>
                <button type='submit'>Submit Request</button>
              
            </form>
        </div>
        </div>
        </section>
        </>
  )
}

export default Contact