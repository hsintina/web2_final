import React , {useState} from 'react';
import Gallery from './Portfolio';
import portfolio1 from './img/pic01.gif';
import portfolio2 from './img/pic02.gif';
import portfolio3 from './img/pic003.gif';
import portfolio4 from './img/pic4.gif';
import portfolio5 from './img/pic05.gif';
import portfolio6 from './img/pic6.GIF';
import portfolio7 from './img/pic7.gif';
import portfolio8 from './img/pic8.gif';
import portfolio9 from './img/pic9.gif';
import Nav from './Nav';
import Footer from './Footer';

import './App.css';

function Work() {
  const [users, setUsers] = useState([
    { image:portfolio1 ,name:"STARBUCKS", message:"ident", link:'/starbucks' },
    { image:portfolio3 ,name:"STARBUCKS", message:"ident", link:'/starbucks' },
    { image:portfolio5 ,name:"STARBUCKS",message:"ident", link:'/starbucks' },
    { image:portfolio2 ,name:"STARBUCKS",message:"ident", link:'/starbucks'},
    { image:portfolio4 ,name:"STARBUCKS",message:"ident", link:'/starbucks'},
    { image:portfolio6 ,name:"Anglerfish",message:"doodle", link:'/anglerfish' },
    { image:portfolio8 ,name:"Zootopia",message:"title sequence", link:'/title' },
    { image:portfolio9 ,name:"Untitle",message:"still to life", link:'/life' },
    { image:portfolio7 ,name:"Suckway",message:"2D animation", link:'/suckway' }
    

  ]);
  return (
    <div className="app">
      <h1 className="title">Motion Design</h1>
      <Nav />
      <div className="content">
      {users.map(user => (
        <Gallery image={user.image} name={user.name} message={user.message} link={user.link}/>
      ))}
    </div>
    <div><Footer /></div>
    
    </div>
  );
}

export default Work;