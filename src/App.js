import React from 'react'; //everything we create component need to do that

import './App.css';

import About from './About';
import Work from './Work';
import Illustration from './Illustration';
import Starbucks from './Starbucks';
import Hp from './Hp';
import ScrollToTop from './ScrollToTop';
import Anglerfish from './Anglerfish';
import Life from './Life.js';
import Title from './Title.js';
import Suckway from './Suckway.js';
import Pengu from './Pengu.js';
import Fire from './Fire.js';
import Num from './Num.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { setDefaultBreakpoints } from 'react-socks';
import  {BreakpointProvider } from 'react-socks';


setDefaultBreakpoints([
  { xs: 0 },
  { s: 376 },
  { m: 426 },
  { l: 769 },
  { xl: 1025 }
]);


function App() {


  return (
    <BreakpointProvider>
    <Router>
    <ScrollToTop />
    <div className="App">
      
      <Switch>
      <Route path="/" exact component={Hp}/>
      <Route path="/about" component={About}/>
      <Route path="/motion" component={Work}/>
      <Route path="/illustration" component={Illustration}/>
      <Route path="/starbucks" component={Starbucks}/>
      <Route path="/anglerfish" component={Anglerfish}/>
      <Route path="/life" component={Life}/>
      <Route path="/title" component={Title}/>
      <Route path="/suckway" component={Suckway}/>
      <Route path="/pengu" component={Pengu}/>
      <Route path="/fire" component={Fire}/>
      <Route path="/num" component={Num}/>
      </Switch>
    </div>
    </Router>
    </BreakpointProvider>
    
  );
}


export default App;//export this file
