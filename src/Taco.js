import React , {useState} from 'react';
import Gif from './Gif';
import logo from './img/logo.png';
import styleframe1 from './img/tacosan2.jpg'
import styleframe2 from './img/tacosan01.jpg'
import Nav from './Nav';
import './App.css';
import background from './img/line.svg';

function Taco() {
  const [users, setUsers] = useState([
    { title:"Tacosan" ,subtitle:"A sausage, one of the common dishes in japanese lunchbox, disguises himself as an octopus, with some rice on his feet. Made with Cinema 4D, Redshift Render", picture1:styleframe1, picture2:styleframe2},

  ]);
  return (
    <div className="app">
      <div>
      <img className="bg" src={background} alt="bg" />
      </div>
      <div>
      <img className="logoo" src={logo} alt="logo" />
      </div>
      <Nav />
      <div className="content">
      {users.map(user => (
        <Gif title={user.title} subtitle={user.subtitle} picture1={user.picture1} picture2={user.picture2}/>
      ))}
    </div>

    </div>
  );
}

export default Taco;