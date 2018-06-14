import React from 'react';
import './style.css';

const Footer = () => {
    return (
        <div className="footer">
        <p class="footertext">Some sort of bold statement.</p>
        <img src="assets/social_icons/twittericon.png" class="twitter"/>
        <img src="assets/social_icons/fbicon.png" class="facebook"/>
        <img src="assets/social_icons/linkedinicon.png" class="linkedin"/>
        <img src="assets/social_icons/emailicon.png" class="email"/>
        </div> 
       );
}

export default Footer;