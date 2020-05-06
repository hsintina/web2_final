import React  from 'react';
import Nav from './Nav';
import './App.css';

import styleframe1 from './img/starbucks1.jpg';
import styleframe2 from './img/starbucks2.jpg';
import styleframe3 from './img/starbucks3.jpg';
import styleframe4 from './img/starbucks4.jpg';
import logo from './img/logo.png';
import Footer from './Footer';
import{ Link } from 'react-router-dom';
import background from './img/line.svg';
import { css, cx } from 'emotion';

function Starbucks() {

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
    @media (max-width: 768px) {
      display: none;
    }
  `}>
      <div className="wording">
            <div className="worktitle">
              <h1 className="projectName">Starbucks</h1>
              <p>Global Branding Promotion</p>
              <hr/>
              <br/>
              <p>A Starbucks branding video for its globalization, featuring famous landmarks all over five continents.</p>
 
              
            </div>
          </div>
          </div>
        <div className="visual">
          <div className="playerr">
            <iframe className="videor" src="https://player.vimeo.com/video/411989157?color=ffffff&title=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen>
            </iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
            {/* <iframe className="video" src="https://player.vimeo.com/video/411989157?title=0"   frameborder="0" allow="autoplay fullscreen" allowFullScreen></iframe> */}
            <div className={css`
    @media (min-width: 768px) {
      display: none;
    }
  `}>
            <div className="worktitles">
              <p><strong>STARBUCKS</strong> Global Branding Promotion</p>
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
            <img className="styleframe" src={styleframe1} alt="picture1" />
            <img className="styleframe" src={styleframe2} alt="picture2" />
            <img className="styleframe" src={styleframe3} alt="picture3" />
            <img className="styleframe" src={styleframe4} alt="picture4" />
            <div>
       <Link className="back" to='/motion'>⟵ Back to Gallery</Link>
        </div>
        <div><Footer/></div>
        <div className="copyright">© Hsin Ting Lin 2020 </div>
            </div >
              
            
            
          </div>
          
        </div>
       
      </div>
      
 

    </div>
    
  );
}

export default Starbucks;