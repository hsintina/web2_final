import React from 'react';
import Nav from './Nav';
import './App.css';
import styleframe1 from './img/pic901.jpg';
import styleframe2 from './img/pic902.jpg';
import styleframe3 from './img/pic903.jpg';

import Footer from './Footer';



function Life() {
  return (
    <div>
       <Nav />
       <div className="section1">
         <div className="wording">
            <div className="worktitle">
              <h1 className="projectName">Untitle</h1>
              <p>Illustration to life</p>
              <hr/>
              <br/>
              <p>Animated from the illustration work of <a target="_blank" href="https://www.malikafavre.com/">Malika Favre</a></p>
                
            <h2 className="subtitle" > Styleframes </h2>
              
              
            </div>
          </div>
          <div className="visual">
          <iframe className="video" src="https://player.vimeo.com/video/396163601?color=ffffff&title=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            <img className="styleframe" src={styleframe1} alt="picture1" />
            <img className="styleframe" src={styleframe2} alt="picture2" />
            <img className="styleframe" src={styleframe3} alt="picture3" />
            <div><Footer/></div>
          </div>

        <div>

     </div>
     </div>
    
     </div>
  );
}

export default Life;