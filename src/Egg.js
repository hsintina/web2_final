import React  from 'react';
import Nav from './Nav';
import './App.css';

import styleframe1 from './img/bee1.jpg';
import styleframe2 from './img/bee2.jpg';
import styleframe3 from './img/bee3.png';

import logo from './img/logo.png';
import Footer from './Footer';
import{ Link } from 'react-router-dom';
import background from './img/line.svg';
import { css, cx } from 'emotion';

function Egg() {

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
              <h1 className="projectName">Breakfast Set</h1>
              <p>with Jazz music</p>
              <hr/>
              <br/>
              <p>🍳</p>
 
              
            </div>
          </div>
          </div>
        <div className="visual">
        <iframe className="video" src="https://player.vimeo.com/video/503778766?autoplay=1&loop=1&title=0&byline=0&portrait=0"   frameborder="0" allow="autoplay fullscreen picture-in-picture" allowFullScreen></iframe>
            
            <div className={css`
    @media (min-width: 1000px) {
      display: none;
    }
  `}>
            <div className="worktitle">
              <h1 className="projectName">Breakfast Set</h1>
              <p>with Jazz music</p>
              <hr/>
              <br/>
              <p>🍳</p>
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
          {/* <div className="styleframes">
            <img className="styleframe" src={styleframe1} alt="picture1" />
            <img className="styleframe" src={styleframe2} alt="picture2" />
            <img className="styleframe" src={styleframe3} alt="picture3" /> */}
            <div>
       <Link className="back" to='/works'>⟵ Back to Gallery</Link>
        </div>
        <div className="icons"><Footer/></div>
        <div className="copyright">© Hsin Ting Lin 2021 </div>
            {/* </div > */}
              
            
            
          </div>
          
        </div>
       
      </div>
      
 

    </div>
    
  );
}

export default Egg;