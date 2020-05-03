import React from 'react';
import Nav from './Nav';
import './App.css';
import banner from './img/sbanner.jpg';
import styleframe1 from './img/starbucks1.jpg';
import styleframe2 from './img/starbucks2.jpg';
import styleframe3 from './img/starbucks3.jpg';
import styleframe4 from './img/starbucks4.jpg';



function Starbucks() {
  return (
    <div>
       <Nav />
       <div className="section1">
         <div className="wording">
            <div className="worktitle">
              <h1>Starbucks</h1>
              <p>Global Branding Promotion</p>
            </div>
          </div>
          <div className="visual">
            <iframe className="video" src="https://player.vimeo.com/video/411989157?title=0"   frameborder="0" allow="autoplay fullscreen" allowFullScreen></iframe>
            <img className="styleframe" src={styleframe1} alt="picture1" />
            <img className="styleframe" src={styleframe2} alt="picture2" />
            <img className="styleframe" src={styleframe3} alt="picture3" />
            <img className="styleframe" src={styleframe4} alt="picture4" />
          </div>
        <div>

     </div>
     </div>
     </div>
  );
}

export default Starbucks;