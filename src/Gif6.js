import React from 'react';
import './App.css';
import Footer from './Footer';
import{ Link } from 'react-router-dom';
import { css, cx } from 'emotion';

function Gif6({title,subtitle,picture1,picture2,picture3,picture4,picture5,picture6}) {
  return (
       <div className="section1">
         <div className={css`
    @media (max-width: 768px) {
      display: none;
    }
  `}>
         <div className="wording">
            <div className="worktitle">
              <h1 className="projectName">{title}</h1>
              <p>{subtitle}</p>
            </div>
          </div>
          </div>
          <div className="visual">
            <img className="styleframe" src={picture1} alt="picture1" />
            <img className="styleframe" src={picture2} alt="picture2" />
            <img className="styleframe" src={picture3} alt="picture3" />
            <img className="styleframe" src={picture4} alt="picture4" />
            <img className="styleframe" src={picture5} alt="picture5" />
            <img className="styleframe" src={picture6} alt="picture6" />
            <div >
       <Link className="back" to='/works'>⟵ Back to Gallery</Link>
        </div>
            <div><Footer/></div>
            <div className="copyright">© Hsin Ting Lin 2021 </div>
          </div>
     </div>
  );
}

export default Gif6;