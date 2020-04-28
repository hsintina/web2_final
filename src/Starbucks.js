import React from 'react';
import Nav from './Nav';
import './App.css';
import banner from './img/sbanner.jpg';

function Starbucks() {
  return (
    <div>
       <Nav />
       <div className="section1">
          <div className="worktitle">
            <h1>Starbucks</h1>
            <p>Global Branding Promotion</p>
          </div>
      <div>
        <img className="banner" src={banner} alt="starbucks" />
     </div>
     </div>
     </div>
  );
}

export default Starbucks;