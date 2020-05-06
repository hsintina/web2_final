import React from 'react';
import{ Link } from 'react-router-dom';
import { css, cx } from 'emotion';

function Gallery({image,name,message,link}){
    return(
        <div className="gallery">
            <div className={css`
    @media (max-width: 768px) {
      font-size:10px;
    }
  `}>
            <div className="info">
            <h3>{name}</h3>
            <p>{message}</p>
            </div>
            </div>
            <Link to={link}>
              <div className="grid">
            <img className="pic" src={image} alt=' portfolio pic' />
            </div>
            </Link>
        </div>
    );
}

export default Gallery;