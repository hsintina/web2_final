import React , {useState} from 'react';
import Gif from './Gif';
import logo from './img/logo.png';
import styleframe1 from './img/fish1280.gif'
import styleframe2 from './img/sketch.gif'
import Nav from './Nav';
import './App.css';


function Anglerfish() {
  const [users, setUsers] = useState([
    { title:"Anglerfish" ,subtitle:"casual doodle", picture1:styleframe1, picture2:styleframe2},

  ]);
  return (
    <div className="app">
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

export default Anglerfish;