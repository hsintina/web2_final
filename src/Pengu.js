import React , {useState} from 'react';
import Gif from './Gif';
import logo from './img/logo.png';
import styleframe1 from './img/penguin.jpg';
import styleframe2 from './img/penguin.gif';
import Nav from './Nav';
import './App.css';
import background from './img/line.svg';

function Pengu() {
  const [users, setUsers] = useState([
    { title:"Penguin" ,subtitle:"illustration", picture1:styleframe1, picture2:styleframe2},

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

export default Pengu;