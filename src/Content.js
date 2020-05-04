import React from 'react';
import './App.css';


function Content({title,subtitle,vimeo,picture1,picture2,picture3,picture4}) {
  return (
       <div className="section1">
         <div className="wording">
            <div className="worktitle">
              <h1>{title}</h1>
              <p>{subtitle}</p>
            </div>
          </div>
          <div className="visual">
            <iframe className="video" src={vimeo}   frameborder="0" allow="autoplay fullscreen" allowFullScreen></iframe>
            <img className="styleframe" src={picture1} alt="picture1" />
            <img className="styleframe" src={picture2} alt="picture2" />
            <img className="styleframe" src={picture3} alt="picture3" />
            <img className="styleframe" src={picture4} alt="picture4" />
          </div>
     </div>
  );
}

export default Content;