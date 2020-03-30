import React from 'react';

function Tweet({image,name,message}){
    return(
        <div className="tweet">
            <img className="pic" src={image} alt=' portfolio pic' />
            <h3>{name}</h3>
            <p>{message}</p>
        </div>
    );
}

export default Tweet;