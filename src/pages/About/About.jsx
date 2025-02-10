import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHandHoldingHeart, faHandsHelping, faUsers, faLightbulb, faChartLine } from '@fortawesome/free-solid-svg-icons';
import './About.css';

function About() {
  return (
    <div className="about-us">
      <div className="about-hero">
        <h1>About Mahabizguru</h1>
        <p>
          Mahabizguru Business Consultancy Pvt. Ltd. is a leading advisory firm specializing in subsidy consultancy, business registrations, finance, taxation, compliance, and strategic planning. Our team of experienced Chartered Accountants and business experts provides tailored solutions to help businesses and entrepreneurs maximize government incentives and funding opportunities.
        </p>
      </div>

      <div className="about-content">
        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to bridge the gap between businesses and government subsidy programs, ensuring that every eligible entrepreneur can access financial assistance to grow and thrive. We aim to simplify the complex processes of obtaining funding and compliance, allowing our clients to focus on innovation and expansion.
          </p>
          <p>
            We are committed to providing end-to-end consultancy services, from subsidy identification and documentation to final disbursement. By leveraging our expertise, we empower businesses with financial stability and strategic planning to achieve long-term success.
          </p>
        </section>

        <section className="vision">
          <h2>Our Vision</h2>
          <p>
            To be India's most trusted and comprehensive consultancy for government subsidies, financial planning, and business advisory. We envision a future where every business, regardless of size, has the resources and knowledge to utilize government incentives to their full potential.
          </p>
          <p>
            Through innovation, transparency, and continuous learning, we strive to be the preferred consultancy partner for businesses across various sectors, helping them navigate the complexities of government funding and financial growth strategies.
          </p>
        </section>

        <section className="values">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <FontAwesomeIcon icon={faEye} size="3x" />
              <h3>Transparency</h3>
              <p>Providing clear, accurate, and up-to-date information on government subsidy schemes.</p>
            </div>
            <div className="value-item">
              <FontAwesomeIcon icon={faHandHoldingHeart} size="3x" />
              <h3>Accessibility</h3>
              <p>Ensuring every business and farmer can easily access financial and regulatory information.</p>
            </div>
            <div className="value-item">
              <FontAwesomeIcon icon={faHandsHelping} size="3x" />
              <h3>Support</h3>
              <p>Providing end-to-end assistance in the subsidy application and financial planning process.</p>
            </div>
            <div className="value-item">
              <FontAwesomeIcon icon={faUsers} size="3x" />
              <h3>Expertise</h3>
              <p>Leveraging decades of professional experience in financial consulting and compliance.</p>
            </div>
            <div className="value-item">
              <FontAwesomeIcon icon={faLightbulb} size="3x" />
              <h3>Innovation</h3>
              <p>Adopting new strategies and technologies to enhance financial solutions.</p>
            </div>
            <div className="value-item">
              <FontAwesomeIcon icon={faChartLine} size="3x" />
              <h3>Growth</h3>
              <p>Helping businesses scale by optimizing funding opportunities and incentives.</p>
            </div>
          </div>
        </section>

        <section className="team">
          <h2>Meet Our Team</h2>
          <p>
            Mahabizguru is led by a team of experienced Chartered Accountants and business consultants with deep expertise in financial management, subsidy consultancy, and corporate advisory.
          </p>
          <ul>
            <li><strong>CA Ravindra B. Dhawale</strong> - Founder & CEO | Expert in government grants, project finance, and business advisory.</li>
            <li><strong>Mr. Vaibhav N. Kudale</strong> - Head of Accounts, Audit & Taxation | Specializing in statutory audits, taxation, and compliance.</li>
            <li><strong>Mr. Sachin Shankanna</strong> - Head of Legal & Compliance | Expert in corporate law, company formation, and regulatory compliance.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;
