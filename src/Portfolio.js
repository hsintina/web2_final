import React from 'react';

function Gallery({image,name,message}){
    return(
        <div className="gallery">
            <div className="info">
            <h3>{name}</h3>
            <p>{message}</p>
            </div>
            <img className="pic" src={image} alt=' portfolio pic' />
            
        </div>
    );
}

export default Gallery;