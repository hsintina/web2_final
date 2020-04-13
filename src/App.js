import React, {useState} from 'react'; //everything we create component need to do that

import './App.css';
import Nav from './Nav';
import About from './About';
import Work from './Work';
import Gallery from './Portfolio';
import portfolio1 from './img/pic1.jpg';
import portfolio2 from './img/pic2.jpg';
import portfolio3 from './img/pic3.jpg';
import portfolio4 from './img/pic4.jpg';
import portfolio5 from './img/pic5.jpg';
import portfolio6 from './img/pic6.GIF';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const [users, setUsers] = useState([
    { image:portfolio1 ,name:"", message:"" },
    { image:portfolio3 ,name:"", message:"" },
    { image:portfolio5 ,name:"",message:"" },
    { image:portfolio2 ,name:"",message:"" },
    { image:portfolio4 ,name:"",message:"" },
    { image:portfolio6 ,name:"",message:"" }
  ]);
  

  return (
    // <Router>
    // <div className="App">
    //   <Nav />
    //   <Switch>
    //   <Route path="/" exact component={Home}/>
    //   <Route path="/about" component={About}/>
    //   <Route path="/work" component={Work}/>
    //   </Switch>

    // </div>
    // </Router>
    <div className="app">
    <h1 className="title">Hsin Tina</h1>
    <div className="content">
      {users.map(user => (
        <Gallery image={user.image} name={user.name} message={user.message} />
      ))}
    </div>

    </div>
  );
}

// const Home =() =>(
//   <div className="main">
//     <h1>Home Page</h1>
//     <Tweet />
//     <Tweet />
//     <Tweet />
//     <Tweet />
//   </div>
// );

export default App;//export this file
