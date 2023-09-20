import React, { useState } from 'react';
import '../App.css';
import bannerImage from '../images/banner-1.jpg';
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
                <li><a href="registration">Register</a></li>
        </ul>
      </nav>
         {/* Centered Logo */}
         <div className="centered-logo">
          <img src={logoImage} alt="Your Logo"/>
          </div>
      <div className="header-content">
        <h1>Silent Witness</h1>
        <p>_________________________________________</p>
        <p>OUR PLATFORM IS MORE THAN JUST AN APP; IT'S A SANCTUARY FOR THOSE WHO CHOOSE TO REMAIN ANONYMOUS BUT REFUSE TO REMAIN SILENT. WE BELIEVE THAT EVERY ACT OF COURAGE, EVERY PIECE OF INFORMATION SHARED, HAS THE POWER TO TRANSFORM LIVES AND COMMUNITIES.</p>
        <a href="registration" className="cta-button">Register</a>
        <p>..........</p>
        <a href="login" className="login">Log In</a>
      </div>
      </header>
    <main className="main">
              <section className="why-silent-witness">
                <h2>WHY SILENT WITNESS?</h2>
                <p>In a world where fear often silences voices, we offer a refuge for those who need it most. Whether you've witnessed a crime, have vital information to share, or want to contribute to the safety of your community, Silent Witness is your ally.</p>
          <p>Your Anonymity is Sacred We understand the importance of your anonymity. Silent Witness provides a safe, confidential space for you to report crimes, share safety tips, and access vital resources without fear of exposure.</p>
          <p>Building Safer Communities Together Silent Witness is not just an app; it's a movement. It's a community of vigilant individuals, determined to make their neighborhoods safer. By uniting, sharing, and reporting, we create a network of silent witnesses dedicated to fostering change.</p>
          <p> Our Commitment Our commitment goes beyond technology; it's deeply rooted in the values of justice, compassion, and solidarity. We work tirelessly to ensure your voice is heard and your safety is a top priority.</p>
          <h2>NEIGHBORHOOD WATCH</h2>
          <p>In an age of increasing urbanization and complex societal challenges, community safety has become a paramount concern for both residents and law enforcement agencies. One of the most effective grassroots initiatives to address this concern is Neighborhood Watch programs. These programs bring together residents of a neighborhood to collaboratively monitor and report suspicious activities, creating a stronger sense of security and community. In recent years, the advent of mobile technology has revolutionized the way these programs operate, with Neighborhood Watch app like "Silent Witness" playing a pivotal role in enhancing the safety of communities.</p>
          <h3>Benefits of Neighborhood Watch App like "Silent Witness"</h3>
          <p>1. Improved Response Times: With real-time reporting and location data, law enforcement can respond more rapidly to incidents, potentially preventing crimes or minimizing their impact.

2. Enhanced Collaboration: These apps encourage collaboration among neighbors, leading to a more connected community. Neighbors are more likely to look out for one another and assist in times of need.

3. Deterrence: The mere presence of a Neighborhood Watch program and the knowledge that incidents will be reported can deter criminals from targeting a neighborhood.

4. Efficiency: Apps streamline the reporting process, making it more efficient for users and law enforcement alike.

5. Data Collection: Over time, these apps accumulate valuable data on local crime trends, helping law enforcement allocate resources more effectively.</p>
          </section>
        </main>

        <section className="sticky-banner">
        <div className="banner-image"></div>
        <div className="banner-content">
          <h1>JOIN THE SILENT WITNESS MOVEMENT</h1>
          <p>Your voice matters. Your actions count. Join us in our journey to make our communities safer, one report, one tip, one act of kindness at a time.</p>
          <a href="register" className="cta-button">Register</a>
          <p>.........</p>
          <a href="about" className="learn-more">Login</a>
        </div>
      </section>

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
