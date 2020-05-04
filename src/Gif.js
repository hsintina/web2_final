import React from 'react';
import './App.css';
import Footer from './Footer';

function Gif({title,subtitle,picture1,picture2}) {
  return (
       <div className="section1">
         <div className="wording">
            <div className="worktitle">
              <h1 className="projectName">{title}</h1>
              <p>{subtitle}</p>
            </div>
          </div>
          <div className="visual">
            <img className="styleframe" src={picture1} alt="picture1" />
            <img className="styleframe" src={picture2} alt="picture2" />
            <div><Footer/></div>
          </div>
     </div>
  );
}

export default Gif;