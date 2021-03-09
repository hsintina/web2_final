import React , {useState} from 'react';
import Gif4 from './Gif4';
import logo from './img/logo.png';
import styleframe1 from './img/beer-001s.jpg';
import styleframe2 from './img/beer-004.jpg';
import styleframe3 from './img/beer-006s.jpg';
import styleframe4 from './img/beer-005s.jpg';

// import styleframe5 from './img/qurofune3.jpg';
import Nav from './Nav';
import './App.css';
import background from './img/line.svg';

function Taibeer() {
  const [users, setUsers] = useState([
    { title:"Taiwan Beer" ,subtitle:"Taiwanese Good Friend. Made with Cinema 4D, Redshift Render", picture1:styleframe1, picture2:styleframe2, picture3:styleframe3, picture4:styleframe4},

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
        <Gif4 title={user.title} subtitle={user.subtitle} picture1={user.picture1} picture2={user.picture2} picture3={user.picture3} picture4={user.picture4} />
      ))}
    </div>

    </div>
  );
}

export default Taibeer;