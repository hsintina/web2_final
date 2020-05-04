import React from 'react';
import Nav from './Nav';
import './App.css';

import styleframe1 from './img/pic801.jpg';
import styleframe2 from './img/pic802.jpg';
import styleframe3 from './img/pic803.jpg';
import styleframe4 from './img/pic804.jpg';
import Footer from './Footer';



function Title() {
  return (
    <div>
       <Nav />
       <div className="section1">
         <div className="wording">
            <div className="worktitle">
              <h1 className="projectName">Zootopia</h1>
              <p>Title Sequence</p>
              <hr/>
              <br/>
              <p>Re-producing the title sequence of Zootopia into 2D style.</p>
              <h2 className="subtitle"> Styleframes</h2>
            </div>
          </div>
          <div className="visual">
            <iframe className="video" src="https://player.vimeo.com/video/414278732?title=0"   frameborder="0" allow="autoplay fullscreen" allowFullScreen></iframe>
            <img className="styleframe" src={styleframe1} alt="picture1" />
            <img className="styleframe" src={styleframe2} alt="picture2" />
            <img className="styleframe" src={styleframe3} alt="picture3" />
            <img className="styleframe" src={styleframe4} alt="picture4" />
            <div><Footer/></div>
          </div>

        <div>

     </div>
     </div>
    
     </div>
  );
}

export default Title;