import React , {useState} from 'react';
import Gallery from './Portfolio';
import portfolio1 from './img/pic1.jpg';
import portfolio2 from './img/pic2.jpg';
import portfolio3 from './img/pic3.jpg';
import portfolio4 from './img/pic4.jpg';
import portfolio5 from './img/pic5.jpg';
// import portfolio6 from './img/teabb.jpg';
import portfolio6 from './img/pic6.GIF';
import portfolio7 from './img/pic07.jpg';
import portfolio10 from './img/Fire720.gif';
import portfolio11 from './img/pengu.jpg';
import portfolio12 from './img/04.png';
import portfolio13 from './img/bee.png';
import portfolio14 from './img/ikea.png';
import portfolio15 from './img/taco.png';
import portfolio16 from './img/hi-0015.jpg';
import portfolio17 from './img/taibee.jpg';
import portfolio18 from './img/teabb.jpg';

import Nav from './Nav';
import Footer from './Footer';
import logo from './img/logo.png';
import background from './img/line.svg';
import './App.css';
import { ReactSVG } from 'react-svg';

function Work() {
  const [users, setUsers] = useState([
    { image:portfolio13 ,name:"BEE POSITIVE", message:"personal Works", link:'/bee' },
    { image:portfolio14 ,name:"IKEA", message:"ident", link:'/ikea' },
    { image:portfolio16 ,name:"Happy delivery", message:"wip", link:'/delivery' },
    { image:portfolio15 ,name:"TACOSAN", message:"3D doodle", link:'/taco' },
    // { image:portfolio17 ,name:"Breakfast Set", message:"personal works", link:'/egg' },
    { image:portfolio17 ,name:"Taiwan Beer", message:"personal works", link:'/taibeer' },
    // { image:portfolio6 ,name:"Anglerfish",message:"doodle", link:'/anglerfish'},
    { image:portfolio18 ,name:"Bubble Paradise",message:"3D doodle", link:'/bubble'},

    { image:portfolio1 ,name:"STARBUCKS", message:"ident", link:'/starbucks' },
    { image:portfolio3 ,name:"STARBUCKS", message:"ident", link:'/starbucks'},
    { image:portfolio5 ,name:"STARBUCKS",message:"ident", link:'/starbucks' },
    { image:portfolio2 ,name:"STARBUCKS",message:"ident", link:'/starbucks'},
    { image:portfolio11 ,name:"Penguin",message:"doodle", link:'/pengu'},
    { image:portfolio4 ,name:"STARBUCKS",message:"ident", link:'/starbucks'},

    { image:portfolio7 ,name:"Suckway",message:"2D anime", link:'/suckway'},
    { image:portfolio12 ,name:"Count",message:"down", link:'/num'},
    { image:portfolio6 ,name:"Anglerfish",message:"doodle", link:'/anglerfish'},
 


    
    
    
    

  ]);
  return (
    <div className="app">
       <div>
      <img className="bg" src={background} alt="bg" />
      </div>
      {/* <ReactSVG className="bg" src={background} /> */}
      <div>
      <img className="logo" src={logo} alt="logo" />
      </div>
      <h1 className="title">Works</h1>
      <Nav />
      <div className="content">
      {users.map(user => (
        <Gallery image={user.image} name={user.name} message={user.message} link={user.link} />
      ))}
    </div>
    <div><Footer /></div>
    <div className="copy">© Hsin Ting Lin 2021 </div>
    </div>
  );
}

export default Work;