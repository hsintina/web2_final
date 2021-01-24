import React  from 'react';
import Nav from './Nav';
import './App.css';

import styleframe1 from './img/ikea1.jpg';
import styleframe2 from './img/ikea2.jpg';
import styleframe3 from './img/ikea3.jpg';
import styleframe4 from './img/ikea4.jpg';
import logo from './img/logo.png';
import Footer from './Footer';
import{ Link } from 'react-router-dom';
import background from './img/line.svg';
import { css, cx } from 'emotion';

function Ikea() {

  return (
    <div className="app">
      <div>
      <img className="bg" src={background} alt="bg" />
      </div>
      <div>
      <img className="logoo" src={logo} alt="logo" />
      </div>
       <Nav />
       
      <div className="section1">
        <div className={css`
    @media (max-width: 1000px) {
      display: none;
    }
  `}>
      <div className="wording">
            <div className="worktitle">
              <h1 className="projectName">Ikea</h1>
              <p>Brand Identity Promotion</p>
              <hr/>
              <br/>
              <p>A branding video for Ikea, featuring their products with our ordinary daily life.</p>
 
              
            </div>
          </div>
          </div>
        <div className="visual">
          {/* <div className="playerr">
            <iframe className="videor" src="https://player.vimeo.com/video/411989157?color=ffffff&title=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen>
            </iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script> */}
            <iframe className="video" src="https://player.vimeo.com/video/503579223?title=0"   frameborder="0" allow="autoplay fullscreen" allowFullScreen></iframe>
            <div className={css`
    @media (min-width: 1000px) {
      display: none;
    }
  `}>
            <div className="worktitle">
              <h1 className="projectName">Ikea</h1>
              <p>Brand Identity Promotion</p>
              <hr/>
              <br/>
              <p>A branding video for Ikea, featuring their products with our ordinary daily life.</p>
              <div className={css`
    @media (min-width: 768px) {
      display: none;
    }
  `}>
              <div>
       <Link className="backs" to='/works'>⟵ Back to Gallery</Link>
        </div>
        <div className="icons"><Footer/></div>
        <div className="copyrights">© Hsin Ting Lin 2021 </div>
              </div>
            </div>
              </div>
              <div className={css`
    @media (max-width: 768px) {
      display: none;
    }
  `}>    
          <div className="styleframes">
            <img className="styleframe" src={styleframe1} alt="picture1" />
            <img className="styleframe" src={styleframe2} alt="picture2" />
            <img className="styleframe" src={styleframe3} alt="picture3" />
            <img className="styleframe" src={styleframe4} alt="picture4" />
            <div>
       <Link className="back" to='/works'>⟵ Back to Gallery</Link>
        </div>
        <div className="icons"><Footer/></div>
        <div className="copyright">© Hsin Ting Lin 2021 </div>
            </div >
              
            
            
          </div>
          
        </div>
       
      </div>
      
 

    </div>
    
  );
}

export default Ikea;