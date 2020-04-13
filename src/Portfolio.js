import React from 'react';

function Gallery({image,name,message}){
    return(
        <div className="gallery">
            <img className="pic" src={image} alt=' portfolio pic' />
            <h3>{name}</h3>
            <p>{message}</p>
        </div>
    );
}

export default Gallery;