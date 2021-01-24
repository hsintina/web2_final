import React from 'react';
import Nav from './Nav';
import './App.css';
import Footer from './Footer';
import profile from './img/me12.gif';
import logo from './img/logo.png';
import background from './img/line.svg';
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
    
      <p className="intro"><strong><em>I am Hsin Ting.</em></strong><br/> I'm an illustration-based motion designer devoted to creating dynamic pieces with 2d and 3D illustration. 
        I like to try versatile styles on my works, from subtle illustration to minimalistic 3D, striving to develop my own visual appealing.
        Besides, I'm interested in photography during freetime.</p>
        <p className="intro"> I will be back to New York in May. <br/>Feel free to contact me at <a target="_blank" href="mailto:hsintingting@gmail.com"> hsintingting@gmail.com</a><br/>See ya!</p>
      </div>
        
        <div><Footer/></div>
        <div className="copy">© Hsin Ting Lin 2021 </div>
    </div>
  );
}

export default About;