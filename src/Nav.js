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
           <li><span>Home</span></li>
           </Link>
           <Link style={navStyle} to='/about'>
           <li><span>About</span></li>
           </Link>
           <Link style={navStyle} to='/motion'>
           <li><span>Motion</span></li>
           </Link>



       </ul>
   </nav>
  );
}

export default Nav;