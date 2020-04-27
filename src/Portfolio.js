import React from 'react';
import{ Link } from 'react-router-dom';

function Gallery({image,name,message,link}){
    return(
        <div className="gallery">
            <div className="info">
            <h3>{name}</h3>
            <p>{message}</p>
            </div>
            <Link to={link}>
            <img className="pic" src={image} alt=' portfolio pic' />
            </Link>
        </div>
    );
}

export default Gallery;