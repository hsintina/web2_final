import React  from 'react';
import Nav from './Nav';
import './App.css';

import styleframe1 from './img/delivery02.png';
import styleframe2 from './img/scene01.jpg';
import styleframe3 from './img/boy.jpg';
import styleframe4 from './img/football.jpg';
import styleframe5 from './img/lady-1.jpg';
import styleframe6 from './img/assets-001.jpg';

import logo from './img/logo.png';
import Footer from './Footer';
import{ Link } from 'react-router-dom';
import background from './img/line.svg';
import { css, cx } from 'emotion';

function Delivery() {

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
              <h1 className="projectName">Happy delivery</h1>
              <p>Deliveryman in the mood. And not. Made with Cinema 4D, Redshift Render</p>
              <hr/>
              <br/>
              <p>work-in-progress thesis work.</p>
 
              
            </div>
          </div>
          </div>
          <div className="visual">
          <iframe className="video" src="https://player.vimeo.com/video/505476188?autoplay=1&loop=1&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay fullscreen picture-in-picture" allowFullScreen></iframe><br/>
          <iframe className="video" src="https://player.vimeo.com/video/505476107?autoplay=1&loop=1&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay fullscreen picture-in-picture" allowFullScreen></iframe><br/>
          <iframe className="video" src="https://player.vimeo.com/video/505476006?autoplay=1&loop=1&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay fullscreen picture-in-picture" allowFullScreen></iframe><br/>
            <div className={css`
    @media (min-width: 1000px) {
      display: none;
    }
  `}>
            <div className="worktitle">
              <h1 className="projectName">Happy delivery</h1>
              <p>Deliveryman in the mood. And not.</p>
              <hr/>
              <br/>
              <p>work-in-progress thesis work.</p>
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
            <img className="styleframe" src={styleframe2} alt="character 1" />
            
            <img className="styleframe" src={styleframe5} alt="character 4" />
            <img className="styleframe" src={styleframe4} alt="character 3" />
            <img className="styleframe" src={styleframe3} alt="character 2" />
            <img className="styleframe" src={styleframe6} alt="character 2" />
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

export default Delivery;