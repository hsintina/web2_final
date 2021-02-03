import React from 'react';
import icon1 from './img/iconvimeo.svg';
import icon2 from './img/iconig.png';
import icon3 from './img/iconemail.png';
import icon4 from './img/iconlinkedin.png';



function Footer() {
    return(
        <div>
          <div className="footer">
            <a target="_blank" href="https://www.vimeo.com/hsintingting">
           <img className="icon" src={icon1} alt="vimeo/hsintingting"  /> 
           </a>
           <a target="_blank" href="mailto:hsintingting@gmail.com">
           <img className="icon" src={icon3} alt="email"  /> 
           </a>
           <a target="_blank" href="https://www.instagram.com/anitnish">
           <img className="icon" src={icon2} alt="instagram/hsin_tina"  /> 
           </a>
           <a target="_blank" href="https://www.linkedin.com/in/hsintingting">
           <img className="icon" src={icon4} alt="linkedin/hsintingting"  /> 
           </a>
           </div>
           
       
           
           

        </div> 
    );
};

export default Footer;