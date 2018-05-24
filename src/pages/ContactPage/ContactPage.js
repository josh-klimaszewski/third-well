import React from 'react';
import './style.css';

const ContactPage = () => {
    return (
        <div className="contact-page">
            <div className="title">Contact Us</div>
            <div className="description">
            We are always looking to build new industry relationshps.
            </div>
            
            <form 
                className="form" 
                action="//formspree.io/third.well.messages@gmail.com" 
                method="POST">
                <input className="name" type="text" name="name" placeholder="Name" />
                <input className="email" type="email" name="_replyto" placeholder="Email" />
                <input className="phone" type="text" name="phone" placeholder="Phone" />
                <input className="company" type="text" name="company" placeholder="Company" />
                <input className="position" type="text" name="position" placeholder="Position/Title" />
                <textarea className="message" name="message" placeholder="Message" />
                <input className="submit" type="submit" value="Send" />
                <input type="hidden" name="_subject" value="New Message for Third Well" />
            </form>
        </div> 
       );
}

export default ContactPage;

// third.well.messages@gmail.com     password: thirdwell420!
