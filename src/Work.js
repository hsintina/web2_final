import React , {useState} from 'react';
import Gallery from './Portfolio';
import portfolio1 from './img/pic01.gif';
import portfolio2 from './img/pic02.gif';
import portfolio3 from './img/pic03.gif';
import portfolio4 from './img/pic4.gif';
import portfolio5 from './img/pic05.gif';
import portfolio6 from './img/pic6.GIF';
import profile from './img/pin.gif';
import Nav from './Nav';
import{ Link } from 'react-router-dom';


import './App.css';

function Work() {
  const [users, setUsers] = useState([
    { image:portfolio1 ,name:"STARBUCKS", message:"Global Branding Design", link:'/starbucks' },
    { image:portfolio3 ,name:"STARBUCKS", message:"Global Branding Design", link:'/starbucks' },
    { image:portfolio5 ,name:"STARBUCKS",message:"Global Branding Design", link:'/starbucks' },
    { image:portfolio2 ,name:"STARBUCKS",message:"Global Branding Design", link:'/starbucks'},
    { image:portfolio4 ,name:"STARBUCKS",message:"Global Branding Design", link:'/starbucks'},
    { image:portfolio6 ,name:"Anglerfish",message:"doodle", link:'/starbucks' }
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
    </div>
  );
}

export default Work;