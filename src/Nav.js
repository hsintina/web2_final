import React from 'react';

import './App.css';
import{ Link } from 'react-router-dom';


function Nav() {
    const navStyle={
        // color:#333333;
        
    }
  return (
   <nav>
    
       <ul className="nav-link">
           <Link style={navStyle} to='/'>
           <li className="menu"><span>Reel </span></li>
           </Link>
           <Link style={navStyle} to='/about'>
           <li className="menu"><span>About</span></li>
           </Link>
           <Link style={navStyle} to='/works'>
           <li className="menu"><span>Works</span></li>
           </Link>



       </ul>
   </nav>
  );
}

export default Nav;