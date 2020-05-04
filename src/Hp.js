import React, {useState} from 'react';
import Gallery from './Portfolio';
import portfolio1 from './img/pic01.gif';
import portfolio2 from './img/pic02.gif';
import portfolio3 from './img/pic03.gif';
import portfolio4 from './img/pic4.gif';
import portfolio5 from './img/pic05.gif';
import portfolio6 from './img/pic6.GIF';
import profile from './img/pin2.gif';
import Nav from './Nav';
import Footer from './Footer';
function Hp(){
    const [users, setUsers] = useState([
        { image:portfolio1 ,name:"STARBUCKS", message:"Global Branding Design" },
        { image:portfolio3 ,name:"STARBUCKS", message:"Global Branding Design" },
        { image:portfolio5 ,name:"STARBUCKS",message:"Global Branding Design" },
        { image:portfolio2 ,name:"STARBUCKS",message:"Global Branding Design" },
        { image:portfolio4 ,name:"STARBUCKS",message:"Global Branding Design" },
        { image:portfolio6 ,name:"Anglerfish",message:"doodle" }
      ]);
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