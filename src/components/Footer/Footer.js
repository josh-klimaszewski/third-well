import React from 'react';
import './style.css';

const Footer = () => {
    return (
        <div className="footer">
        <p class="footertext">Some sort of bold statement.</p>
        <a href="https://twitter.com/3rdwell" target="blank"><img src="assets/social_icons/twittericon.png" class="twitter"/></a>
        <a href="https://m.facebook.com/3rdWell/" target="blank"><img src="assets/social_icons/fbicon.png" class="facebook"/></a>
        <a href="https://www.linkedin.com/company/third-well-llc/" target="blank"><img src="assets/social_icons/linkedinicon.png" class="linkedin"/></a>
        <a href="mailto:ben@thirdwell.com"><img src="assets/social_icons/emailicon.png" class="email"/></a>
        </div> 
       );
}

export default Footer;