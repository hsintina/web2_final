import React from 'react';
import Nav from './Nav';
import './App.css';
import Footer from './Footer';
import profile from './img/profile.gif';
import logo from './img/logo.png';
import background from './img/line.png';
function About() {
  return (
    <div >
      <div>
      <img className="bg" src={background} alt="bg" />
      </div>
      <div>
      <img className="logo" src={logo} alt="logo" />
      </div>
      <h1 className="title">About</h1>
      <Nav />
      <div className="abt">
      
      <img src={profile} alt="profile" />
      <h2>Hi there!</h2> 
    
      <p className="intro"><strong><em>I am Hsin Ting.</em></strong><br/> I am an illustration-based motion designer who dedicate to creating dynamic pieces with subtle illustration. 
        I strive to combine 3D concept into 2D work.
        Besides, I am interested in photography when I am free.</p>
        <p className="intro"> I currently live in New York. <br/>Feel free to contact me at <a target="_blank" href="mailto:hsintingting@gmail.com"> hsintingting@gmail.com</a><br/>See ya!</p>
      </div>
        
        <div><Footer/></div>
        <div className="copy">© Hsin Ting Lin 2020 </div>
    </div>
  );
}

export default About;