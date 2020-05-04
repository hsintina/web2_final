import React, {useState} from 'react';
import Nav from './Nav';
import Footer from './Footer';
function Hp(){
    return(
    <div className="app">
     <h1 className="title">Hsin Tina</h1>
     <Nav />
     <div>
     <iframe className="reel" src="https://player.vimeo.com/video/414398968?color=ffffff&title=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
    <div><Footer/></div>
    </div>
    
 
    );

}
 export default Hp;