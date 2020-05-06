import React from 'react';
import Nav from './Nav';
import './App.css';
import styleframe1 from './img/pic901.jpg';
import styleframe2 from './img/pic902.jpg';
import styleframe3 from './img/pic903.jpg';
import styleframe5 from './img/pic905.jpg';
import logo from './img/logo.png';
import Footer from './Footer';
import{ Link } from 'react-router-dom';
import background from './img/line.svg';
import { css, cx } from 'emotion';


function Life() {
  return (
    <div>
      <div>
      <img className="bg" src={background} alt="bg" />
      </div>
       <Nav />
       <div>
      <img className="logoo" src={logo} alt="logo" />
      </div>
       <div className="section1">
       <div className={css`
    @media (max-width: 1000px) {
      display: none;
    }
  `}>
         <div className="wording">
            <div className="worktitle">
              <h1 className="projectName">Still</h1>
              <p>to life</p>
              <hr/>
              <br/>
              <p>Animated from the illustration work of <a target="_blank" href="https://www.malikafavre.com/">Malika Favre</a></p>

              
              
            </div>
          </div>
          </div>
          <div className="visual">
          <iframe className="video" src="https://player.vimeo.com/video/396163601?color=ffffff&title=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            {/* <img className="styleframe" src={styleframe1} alt="picture1" />
            <img className="styleframe" src={styleframe2} alt="picture2" />
            <img className="styleframe" src={styleframe3} alt="picture3" /> */}
          {/* <div className="visual">
          <div className="playerr">
            <iframe className="videor" src="https://player.vimeo.com/video/396163601?color=ffffff&title=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen>
            </iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script> */}
          <div className={css`
    @media (min-width: 1000px) {
      display: none;
    }
  `}>
         <div className="worktitle">
              <h1 className="projectName">Still</h1>
              <p>to life</p>
              <hr/>
              <br/>
              <p>Animated from the illustration work of <a target="_blank" href="https://www.malikafavre.com/">Malika Favre</a></p>

              
              
            </div>
              </div>
              <div className={css`
    @media (max-width: 768px) {
      display: none;
    }
  `}>    
          <div className="styleframes">
            <img className="styleframe" src={styleframe5} alt="picture5" />
            <img className="styleframe" src={styleframe3} alt="picture3" />
            <img className="styleframe" src={styleframe1} alt="picture1" />
            <img className="styleframe" src={styleframe2} alt="picture2" />
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

export default Life;