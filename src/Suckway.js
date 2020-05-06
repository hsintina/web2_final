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
import styleframe8 from './img/pic908.jpg';
import styleframe9 from './img/pic909.jpg';
import Footer from './Footer';
import logo from './img/logo.png';
import{ Link } from 'react-router-dom';
import background from './img/line.svg';
import { css, cx } from 'emotion';

function Suckway() {
  return (
    <div>
      <div>
      <div>
      <img className="bg" src={background} alt="bg" />
      </div>
      <img className="logoo" src={logo} alt="logo" />
      </div>
       <Nav />
       
       <div className="section1">
       <div className={css`
    @media (max-width: 768px) {
      display: none;
    }
  `}>
         <div className="wording">
            <div className="worktitle">
              <h1 className="projectName">Suckway</h1>
              <p>Frame-by-frame animation</p>
              <hr/>
              <br/>
              <p>A cel-animation illustrating the story of commuters.</p>

            </div>
          </div>
          </div>
          {/* <div className="visual"> */}
          {/* <div className="playerr">
            <iframe className="videor" src="https://player.vimeo.com/video/412008860?color=ffffff&title=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen>
            </iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script> */}
          <div className="visual">
            <iframe className="video" src="https://player.vimeo.com/video/412008860?title=0"   frameborder="0" allow="autoplay fullscreen" allowFullScreen></iframe>
            <div className={css`
    @media (min-width: 768px) {
      display: none;
    }
  `}>  
            <div className="worktitles">
              <p><strong>SUCKWAY</strong> Frame by frame</p>
              <hr/>
              <br/>
              </div>
              </div>
              <div className={css`
    @media (max-width: 768px) {
      display: none;
    }
  `}>  
            <div className="styleframes">
              <img className="styleframe" src={styleframe8} alt="picture8" />
              <img className="styleframe" src={styleframe9} alt="picture9" />
              <img className="styleframe" src={styleframe1} alt="picture1" />
              <img className="styleframe" src={styleframe2} alt="picture2" />
              <img className="styleframe" src={styleframe3} alt="picture3" />
              <img className="styleframe" src={styleframe4} alt="picture4" />
              <img className="styleframe" src={styleframe5} alt="picture5" />
              <div >
                <Link className="back" to='/motion'>⟵ Back to Gallery</Link>
              </div>
              <div><Footer/></div>
              <div className="copyright">© Hsin Ting Lin 2020 </div>
            </div>
            </div>
          </div>
     </div>
    
     </div>
  );
}

export default Suckway;