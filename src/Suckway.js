import React from 'react';
import Nav from './Nav';
import './App.css';
import styleframe1 from './img/pic901.gif';
import styleframe2 from './img/pic902.gif';
import styleframe3 from './img/pic903.gif';
import styleframe4 from './img/pic904.gif';
import styleframe5 from './img/pic905.png';
import styleframe6 from './img/pic906.gif';
import styleframe7 from './img/pic907.gif';
import Footer from './Footer';



function Suckway() {
  return (
    <div>
       <Nav />
       <div className="section1">
         <div className="wording">
            <div className="worktitle">
              <h1 className="projectName">Suckway</h1>
              <p>Frame-by-frame animation</p>
              <hr/>
              <br/>
              <p>A cel-animation illustrating the story of commuters.</p>
              <h2 className="subtitle"> Styleframes</h2>
            </div>
          </div>
          <div className="visual">
            <iframe className="video" src="https://player.vimeo.com/video/412008860?title=0"   frameborder="0" allow="autoplay fullscreen" allowFullScreen></iframe>
            <img className="styleframe" src={styleframe5} alt="picture5" />
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

export default Suckway;