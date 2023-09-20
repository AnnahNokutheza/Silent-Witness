import React, { useState } from 'react';
import '../App.css';
import bannerImage from '../images/banner.jpg';
import logoImage from '../images/logo.png';
import linkedInIcon from '../images/icons/linkedin-icon.png';
import twitterIcon from '../images/icons/twitter-icon.png';
import instagramIcon from '../images/icons/instagram-icon.png';




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
          <li><a href="home">Home</a></li>
             <li><a href="about">About</a></li>
             <li><a href="report">Report</a></li>
             <li><a href="resource">Resource</a></li>
             <li><a href="login">Login</a></li>
                <li><a href="register">Register</a></li>
        </ul>
      </nav>
         {/* Centered Logo */}
         <div className="centered-logo">
          <img src={logoImage} alt="Your Logo"/>
          </div>
      <div className="header-content">
        <p>_________________________________________________________</p>
        <h1>ABOUT SILENT WITNESS</h1>
        <p>_________________________________________________________</p>
        <p>WELCOME TO SILENT WITNESS: TOGETHER, WE'RE STRONGER.</p>
      </div>
      </header>
    <main className="main">
              <section className="why-silent-witness">
                <h2>ABOUT US</h2>
                <p>At Silent Witness, we are driven by a singular mission: to empower you, the silent observer, to become a voice for justice, safety, and change. Our platform is more than just an app; it's a sanctuary for those who choose to remain anonymous but refuse to remain silent. We believe that every act of courage, every piece of information shared, has the power to transform lives and communities.</p>
          <p>Your Anonymity is Sacred We understand the importance of your anonymity. Silent Witness provides a safe, confidential space for you to report crimes, share safety tips, and access vital resources without fear of exposure.</p>
          <p>In a world where fear often silences voices, we offer a refuge for those who need it most. Whether you've witnessed a crime, have vital information to share, or want to contribute to the safety of your community, Silent Witness is your ally.</p>
          <p>__________________________________________________________________________________________________________________________________________________________________________________________________________________________________</p>
          <h2>YOUR ANONYMITY IS SACRED</h2>
          <p>We understand the importance of your anonymity. Silent Witness provides a safe, confidential space for you to report crimes, share safety tips, and access vital resources without fear of exposure.</p>
          <p>Silent Witness is not just an app; it's a movement. It's a community of vigilant individuals, determined to make their neighborhoods safer. By uniting, sharing, and reporting, we create a network of silent witnesses dedicated to fostering change.</p>
          </section>
        </main>

       {/* Footer */}
       <footer className="footer">
        <div className="social-icons">
          <a href="#https" className="social-icon" width="25px" height="25px" >
            <img src={linkedInIcon} alt="linkedIn" width="25px" height="25px" />
          </a>
          <a href="#https" className="social-icon" width="25px" height="25px" >
            <img src={twitterIcon} alt="Twitter" width="25px" height="25px" />
          </a>
          <a href="#https" className="social-icon" width="25px" height="25px" >
            <img src={instagramIcon} alt="Instagram" width="25px" height="25px" />
          </a>
          {/* Add more social icons as needed */}
        </div>
        <div className="emergency-contacts">
          <p>Emergency Contacts for South Africa:</p>
          <p>Police: 10111</p>
          <p>Ambulance: 10177</p>
          {/* Add more emergency contacts if necessary */}
        </div>
        <p className="copyright">
          &copy; 2023; SILENT WITNESS | YOUR TRUSTED PARTNER
        </p>
      </footer>
    </div>  );
}

export default App;
