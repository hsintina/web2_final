import React from 'react';
import icon1 from './img/iconvimeo.svg';
import icon2 from './img/iconig.png';
import icon3 from './img/iconemail.png';



function Footer() {
    return(
        <div className="footer">
            <a target="_blank" href="https://www.vimeo.com/hsintingting">
           <img className="icon" src={icon1} alt="vimeo"  /> 
           </a>
           <a target="_blank" href="https://www.instagram.com/hsin_tina">
           <img className="icon" src={icon2} alt="instagram"  /> 
           </a>
           <a target="_blank" href="mailto:hsintingting@gmail.com">
           <img className="icon" src={icon3} alt="email"  /> 
           </a>

        </div> 
    );
};

export default Footer;