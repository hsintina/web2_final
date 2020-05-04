import React from 'react';
import Nav from './Nav';
import './App.css';
import Footer from './Footer';

function About() {
  return (
    <div >
      <h1 className="title">About</h1>
      <Nav />
      <h2>Hi there!</h2> 
      <br/>
      <p className="intro">I am an illustration-based motion designer who dedicate to creating dynamic pieces with subtle illustration. 
        I strive to combine 3D concept into 2D work. 
        Besides, I am also interested in photography in my free time.</p>
        <div><Footer/></div>
    </div>
  );
}

export default About;