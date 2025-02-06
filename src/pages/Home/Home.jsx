// Home.js
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to Mahabizguru</h1>
        <p>Empowering Businesses with Government Grants and Financial Solutions</p>
      </div>
      
      <section className="features">
        <h2>Our Services</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Government Subsidies</h3>
            <p>Comprehensive guidance on various government grant and subsidy schemes.</p>
          </div>
          <div className="feature-card">
            <h3>Financial Assistance</h3>
            <p>Expert advice on loan options, working capital, and business funding.</p>
          </div>
          <div className="feature-card">
            <h3>Business Consultancy</h3>
            <p>Professional consultation on tax compliance, audits, and business growth.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
