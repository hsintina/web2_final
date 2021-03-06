import React , {useState} from 'react';
import Gif6 from './Gif6';
import logo from './img/logo.png';
import styleframe1 from './img/bcake.gif';
import styleframe2 from './img/bbcake.jpg';
import styleframe3 from './img/teabb.gif';
import styleframe4 from './img/bbtea.jpg';
import styleframe5 from './img/qurofune-3.gif';
import styleframe6 from './img/qurofune2.jpg';
// import styleframe5 from './img/qurofune3.jpg';
import Nav from './Nav';
import './App.css';
import background from './img/line.svg';

function Bubble() {
  const [users, setUsers] = useState([
    { title:"Bubble Paradise" ,subtitle:"One of the most trendy Taiwanese treats, Bubble, gains its popularity all over the world. Made with Cinema 4D, Redshift Render", picture1:styleframe1, picture2:styleframe2, picture3:styleframe3, picture4:styleframe4,picture5:styleframe5,picture6:styleframe6},

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
      <div className="gifcontent">
      {users.map(user => (
        <Gif6 title={user.title} subtitle={user.subtitle} picture1={user.picture1} picture2={user.picture2} picture3={user.picture3} picture4={user.picture4} picture5={user.picture5} picture6={user.picture6}/>
      ))}
    </div>

    </div>
  );
}

export default Bubble;