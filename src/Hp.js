import React, {useState} from 'react';
import Nav from './Nav';
import Footer from './Footer';
import logo from './img/logo.png';
function Hp(){
    return(
    <div className="app">
    <div>
      <img className="logo" src={logo} alt="logo" />
      </div>
     <h1 className="title">Hsin Tina</h1>
     <Nav />
     {/* <div>
     <iframe className="reel" src="https://player.vimeo.com/video/414398968?color=ffffff&title=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div> */}
    <div className="player">
        <iframe className="reelr" src="https://player.vimeo.com/video/414398968?color=ffffff&title=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen>
            </iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
    <div><Footer/></div>
    </div>
    
 
    );

}
 export default Hp;