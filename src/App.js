import React, {useState} from 'react'; //everything we create component need to do that

import './App.css';
import Nav from './Nav';
import About from './About';
import Work from './Work';
import Tweet from './Portfolio';
import portfolio1 from './img/portfolio1.jpg';
import portfolio2 from './img/portfolio2.jpg';
import portfolio3 from './img/portfolio3.jpg';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const [users, setUsers] = useState([
    { image:portfolio1 ,name:"AAA", message:"Project1" },
    { image:portfolio2 ,name: "BBB", message:"Project2" },
    { image:portfolio3 ,name:"CCC",message:"Project3" }
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
    <h1>Home Page</h1>
    <div className="content">
      {users.map(user => (
        <Tweet image={user.image} name={user.name} message={user.message} />
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
