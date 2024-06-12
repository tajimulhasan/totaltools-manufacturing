import React, { useState } from 'react';
import './ContactUs.css';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';
const ContactUs = () => {
    const handleContactUsSubmit = (e) =>{
        e.preventDefault();
           const email = e.target.email.value;
           const subject = e.target.subject.value;
           const comment = e.target.comment.value;
           const data = {email, subject, comment};

        const url = 'https://totaltools-manufacturing-server-site.onrender.com/contactus';
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success("Send successfully! Thank you");
                e.target.reset();
            }
            else{
                Swal.fire({
                    title: "Failed!",
                    text: "You are not logged in. Please login",
                    icon: "error"
                  });
            }
            console.log(data)
        })
    }
    return (
        <div className='contactus-container'>
            <p className="contactus text-primary font-bold text-center">Contact Us</p>
      <p  className="stay-connected text-center text-black">Stay connected with us</p>
            <form className='' onSubmit={handleContactUsSubmit}>
            <input type="email" name='email' placeholder="Email" className="input input-bordered w-full max-w-xs mb-3 mt-4" required/>
            <input type="text" name='subject' placeholder="Subject" className="input input-bordered w-full max-w-xs mb-3" required/>
            <textarea className="textarea textarea-bordered  w-full  max-w-xs mb-1" name='comment' placeholder="Your message" required></textarea>
         <input type="submit" className='btn bg-primary btn-md mt-2 w-full' value="Submit" />
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ContactUs;