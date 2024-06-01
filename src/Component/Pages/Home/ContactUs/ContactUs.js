import React from 'react';
import contactUs from '../../../images/contactusbg.jpg';
import './ContactUs.css';
const ContactUs = () => {
    const handleContactUsSubmit = e =>{
        e.preventDefault();
    }
    return (
        <div className='contactus-container' style={{background: `url(${contactUs})`, backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
            <p className="contactus text-primary font-bold text-center">Contact Us</p>
      <p  className="stay-connected text-center text-white">Stay connected with us</p>
            <form className='' onSubmit={handleContactUsSubmit}>
            <input type="text" placeholder="Email" class="input input-bordered w-full max-w-xs mb-3 mt-4" />
            <input type="text" placeholder="Subject" class="input input-bordered w-full max-w-xs mb-3" />
            <textarea class="textarea textarea-bordered  w-full  max-w-xs mb-1" placeholder="Your message"></textarea>
         <input type="submit" className='btn bg-primary btn-md mt-2 w-full' value="Submit" />
            </form>
        </div>
    );
};

export default ContactUs;