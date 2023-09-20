import React, { useState } from 'react';
import '../App.css';
import bannerImage from '../images/pic02.jpg';
import logoImage from '../images/logo.png';

function App() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

  //Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
    {/* Header */}
    <header className="header" style={{ backgroundImage: `url(${bannerImage})` }}>

          <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      <nav>
        <ul className={`menu ${isMenuOpen ? 'open' : ''}`} >
          <li><a href="landing">Landing</a></li>
          <li><a href="home">Home</a></li>
             <li><a href="about">About</a></li>
             <li><a href="report">Report</a></li>
             <li><a href="resource">Resource</a></li>
                <li><a href="login">Login</a></li>
                <li><a href="registration">Register</a></li>
        </ul>
      </nav>
         {/* Centered Logo */}
         <div className="centered-logo">
          <img src={logoImage} alt="Your Logo"/>
          </div>
      <div className="header-content">
        <p>CRIME REPORT SUBMITTED SUCCESSFULLY!</p>
        <p>Thank You For Choosing US.</p>
      </div>
      </header>
    </div>  );
}

export default App;
