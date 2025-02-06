import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHandHoldingHeart, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import './About.css';

function About() {
  return (
    <div className="about-us">
      <div className="about-hero">
        <h1>About Mahabizguru</h1>
        <p>
          We are a dynamic team of Chartered Accountants providing business and industrial advisory services, specializing in subsidy consultancy, registrations, finance, and more.
        </p>
      </div>

      <div className="about-content">
        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            To empower Indian farmers and agricultural entrepreneurs by providing comprehensive 
            information about government subsidies and support schemes.
          </p>
        </section>

        <section className="vision">
          <h2>Our Vision</h2>
          <p>
            To become the most trusted platform for agricultural subsidy information in India, 
            helping farmers access the support they need to thrive.
          </p>
        </section>

        <section className="values">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <FontAwesomeIcon icon={faEye} size="3x" />
              <h3>Transparency</h3>
              <p>Clear and accurate information about all subsidy schemes.</p>
            </div>
            <div className="value-item">
              <FontAwesomeIcon icon={faHandHoldingHeart} size="3x" />
              <h3>Accessibility</h3>
              <p>Making information easily available to all farmers.</p>
            </div>
            <div className="value-item">
              <FontAwesomeIcon icon={faHandsHelping} size="3x" />
              <h3>Support</h3>
              <p>Dedicated assistance throughout the subsidy application process.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;