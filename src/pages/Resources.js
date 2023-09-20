import React, { useState } from 'react';
import logoImage from '../images/logo.png';
import '../Resource.css';

const EducationalResources = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

  //Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="educational-resources">
      {/* Sticky Header with Background Banner */}
      <header className="sticky-header">
        <div className="banner">
          <h1 className="banner-text">Educational Resources</h1>
        </div>
        <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      <nav>
        <ul className={`menu ${isMenuOpen ? 'open' : ''}`} >
          <li><a href="home">Home</a></li>
          <li><a href="resource">Resource</a></li>
             <li><a href="about">About</a></li>
             <li><a href="report">Report</a></li>
                <li><a href="login">Login</a></li>
                <li><a href="registration">Register</a></li>
        </ul>
      </nav>
         {/* Centered Logo */}
         <div className="centered-logo">
          <img src={logoImage} alt="Your Logo"/>
          </div>
      </header>

      <div className="resource-container">
        {/* Category: Crime Type */}
        <div className="category">
          <h2 className="category-title">Kidnapping Resources</h2>
          <div className="resource-card">
            <h3 className="resource-title">What to do if Your Child is Kidnapped</h3>
            <p className="resource-description">
            A child getting kidnapped is every parent’s worst nightmare! Especially in South Africa where the danger of kidnapping grows year after year. As evidenced in multiple viral videos of children snatched in malls and restaurants, it can happen in the blink of an eye! To save a child’s life, it is essential to know what to do, especially in the first 24 hours.

What defines a kidnapping?
According to South African law, kidnapping is a separate crime from abduction. Abduction is the unlawful taking of a minor from the control of their parent or guardian for marriage or sexual exploitation, or the abductor decides to raise the child are their own. A kidnapping, however, is when a child is detained, taken away some distance from where they were abducted, and held for ransom money.
            </p>
            <p>
            As mentioned, the first 24 hours are crucial, and if you take action as soon as possible, it drastically improves the chances of the authorities finding a missing child:

Step 1: Find a recent and clear photograph of your child. Make sure his/her face is visible

Step 2: Go to your nearest police station immediately to open a case (produce the photograph). There is no waiting period to report a missing person.

Step 3: Provide a clear description of the child (age, height and weight). Mention what the child was wearing when you last saw them and point out if the child has any distinctive features or marks (such as a scar, or birthmark)

Step 4: Complete and sign a SAPS 55 (A) form and make sure you get the investigating officer’s contact details.
            </p>
            <a href="https://www.lawforall.co.za/family-relationships/what-to-do-if-your-child-is-kidnapped/" className="resource-link">
              Learn More
            </a>
          </div>
          {/* Add more kidnapping resources as needed */}
        </div>

        {/* Category: Gender-based Violence */}
        <div className="category">
          <h2 className="category-title">Gender-based Violence Resources</h2>
          <div className="resource-card">
            <h3 className="resource-title">What is gender-based violence?</h3>
            <p className="resource-description">
            There are many different definitions of GBV, but it can be broadly defined as “the general term used to capture violence that occurs as a result of the normative role expectations associated with each gender, along with the unequal power relationships between […] genders, within the context of a specific society.” [1]

The expectations associated with different genders vary from society to society and over time. Patriarchal power structures dominate in many societies, in which male leadership is seen as the norm, and men hold the majority of power. Patriarchy is a social and political system that treats men as superior to women – where women cannot protect their bodies, meet their basic needs, participate fully in society and men perpetrate violence against women with impunity [2].
            </p>
            <a href="https://www.saferspaces.org.za/understand/entry/gender-based-violence-in-south-africa" className="resource-link">
              Learn More
            </a>
          </div>
          {/* Category: Hijaking */}
          <div className="category">
            <h2 className="category-title">Hijacking</h2>
            <div className="resource-card">
              <h3 className="resource-title">How to react in the event of a hijacking</h3>
              <p className="resource-description">
              The prospect of being targeted in a hijacking is frightening. It's a scenario that you hope to never find yourself in. Unfortunately, despite our best efforts, the reality is that it could happen to any one of us. That’s why it’s important to have the appropriate knowledge that will allow you to safely navigate this unfortunate event.

Here are some tips on how you should react in the event of a hijacking:

1. Don’t resist and do as you’re told
While your first instinct may be to retaliate when your life and possessions are threatened, avoid this reaction at all costs. Yes, it’s your car and you’ve worked hard to own and drive it, but hopefully it’s also insured, so unlike your life, it can be replaced, along with your other possessions inside the vehicle.

The best way to handle the situation is to not threaten or challenge the hijackers in any way, especially if they are carrying a weapon such as a gun or a knife.

Calmly just leave all your valuables in the vehicle, surrender your car and move away from it as quickly as possible without making any sudden moves. Always try your best to place as much distance as possible between yourself and the hijackers.

2. Don’t make any sudden movements
As previously mentioned, trying to be a hero is a move criminals expect from the people they’re stealing from, so the hijackers are more likely to be startled by any sudden movements and they may perceive it as a threat. Their response could be to panic which could result in them retaliating aggressively.

Keep your hands clearly visible at all times, preferably in the air. “The safety belt can put you at risk of getting shot at,” a hijacker told Independent Media in an interview. “When you reach to unclick your seatbelt, we might panic and think that you are reaching for a weapon, and that is when you get shot.”

Lift both your hands up and spread your ten fingers wide apart to show you're not holding anything, which sends a message that you are not a threat to the hijacker, advises Derek Kirby, Ford South Africa's advanced and defensive driving expert.

Avoid making eye contact with hijackers and speak slowly and calmly so as not to further aggravate the hijackers.
              </p>
              <a href="https://www.cartrack.co.za/blog/how-to-react-in-the-event-of-a-hijacking" className="resource-link">
              Learn More
            </a>
            </div>
          </div>
        </div>
        {/* Add more crime categories and resources as needed */}
      </div>
    </div>
  );
}


export default EducationalResources;
