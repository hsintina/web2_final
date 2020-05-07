import React, {useState} from 'react';
import Nav from './Nav';
import Footer from './Footer';
import logo from './img/logo.png';
import background from './img/line.svg';
function Hp(){
    return(
    <div className="app">
        <div>
      <img className="bg" src={background} alt="bg" />
      </div>
    <div>
      <img className="logo" src={logo} alt="logo" />
      </div>
     <h1 className="title">Reel</h1>
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
    <div className="copy">© Hsin Ting Lin 2020 </div>
    </div>
    
 
    );

}
 export default Hp;