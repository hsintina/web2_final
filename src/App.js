import React from 'react'; //everything we create component need to do that

import './App.css';

import About from './About';
import Work from './Work';
import Illustration from './Illustration';
import Starbucks from './Starbucks';
import Hp from './Hp';
import ScrollToTop from './ScrollToTop';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  

  return (
    <Router>
    <ScrollToTop />
    <div className="App">
      
      <Switch>
      <Route path="/" exact component={Hp}/>
      <Route path="/about" component={About}/>
      <Route path="/motion" component={Work}/>
      <Route path="/illustration" component={Illustration}/>
      <Route path="/starbucks" component={Starbucks}/>
      </Switch>

    </div>
    </Router>
    
  );
}


export default App;//export this file
