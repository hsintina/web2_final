import React from 'react';
import Nav from './Nav';
import './App.css';

import styleframe1 from './img/num.jpg';
import Footer from './Footer';
import logo from './img/logo.png';
import{ Link } from 'react-router-dom';
import background from './img/line.svg';
import { css, cx } from 'emotion';

function Num() {
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
    @media (max-width: 1000px) {
      display: none;
    }
  `}>
         <div className="wording">
            <div className="worktitle">
              <h1 className="projectName">Counting down</h1>
              <p>with geometric-shape number.</p>
              <hr/>
              <br/>
              <p>Geometric motion exploration.</p>

            </div>
          </div>
          </div>
          <div className="visual">
          <iframe className="video" src="https://player.vimeo.com/video/520975268?autoplay=1&loop=1&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay fullscreen picture-in-picture" allowFullScreen></iframe><br/>
            <div className={css`
    @media (min-width: 1000px) {
      display: none;
    }
  `}>  
            <div className="worktitle">
              <h1 className="projectName">Counting down</h1>
              <p>with geometric-shape number.</p>
              <hr/>
              <br/>
              <p>Geometric motion exploration.</p>
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
              <div >
                <Link className="back" to='/works'>⟵ Back to Gallery</Link>
              </div>
              <div><Footer/></div>
              <div className="copyright">© Hsin Ting Lin 2021 </div>
            </div>
            </div>
          </div>
     </div>
    
     </div>
  );
}

export default Num;