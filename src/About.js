import React from 'react';
import Nav from './Nav';
import './App.css';
import Footer from './Footer';
import profile from './img/profile.gif';

function About() {
  return (
    <div >
      <h1 className="title">About</h1>
      <Nav />
      <div className="abt">
      
      <img src={profile} alt="profile" />
      <h2>Hi there!</h2> 
    
      <p className="intro">I am an illustration-based motion designer who dedicate to creating dynamic pieces with subtle illustration. 
        I strive to combine 3D concept into 2D work. Currently based in New York.
        Besides, I am interested in photography when I am free.</p>
        <p className="intro">Feel free to contact me at <a target="_blank" href="mailto:hsintingting@gmail.com"> hsintingting@gmail.com</a></p>
      </div>
        <div><Footer/></div>
    </div>
  );
}

export default About;