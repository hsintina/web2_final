import React , {useState} from 'react';
import Gallery from './Portfolio';
import portfolio1 from './img/pic1.jpg';
import portfolio2 from './img/pic2.jpg';
import portfolio3 from './img/pic3.jpg';
import portfolio4 from './img/pic4.jpg';
import portfolio5 from './img/pic5.jpg';
import portfolio6 from './img/pic6.GIF';
import portfolio7 from './img/pic7.gif';
import portfolio8 from './img/pic8.jpg';
import portfolio9 from './img/pic9.jpg';
import portfolio10 from './img/Fire720.gif';
import portfolio11 from './img/pengu.jpg';
import portfolio12 from './img/numb.gif';
import Nav from './Nav';
import Footer from './Footer';
import logo from './img/logo.png';
import background from './img/line.svg';
import './App.css';
import { ReactSVG } from 'react-svg';

function Work() {
  const [users, setUsers] = useState([
    { image:portfolio1 ,name:"STARBUCKS", message:"ident", link:'/starbucks' },
    { image:portfolio3 ,name:"STARBUCKS", message:"ident", link:'/starbucks'},
    { image:portfolio5 ,name:"STARBUCKS",message:"ident", link:'/starbucks' },
    { image:portfolio2 ,name:"STARBUCKS",message:"ident", link:'/starbucks'},
    { image:portfolio4 ,name:"STARBUCKS",message:"ident", link:'/starbucks'},
    { image:portfolio6 ,name:"Anglerfish",message:"doodle", link:'/anglerfish'},
    { image:portfolio9 ,name:"Zootopia",message:"title seq.", link:'/title' },
    { image:portfolio8 ,name:"Still",message:"to life", link:'/life' },
    { image:portfolio7 ,name:"Suckway",message:"2D anime", link:'/suckway'},
    { image:portfolio11 ,name:"Penguin",message:"doodle", link:'/pengu'},
    { image:portfolio12 ,name:"Count",message:"down", link:'/num'},
    { image:portfolio10 ,name:"Fire",message:"SFX", link:'/fire'}
    
    
    

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
    <div className="copy">© Hsin Ting Lin 2020 </div>
    </div>
  );
}

export default Work;