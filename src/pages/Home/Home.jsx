import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to Bharat Subsidy</h1>
        <p>Empowering Indian Agriculture through Government Support</p>
      </div>
      
      <section className="features">
        <h2>Our Services</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Agricultural Subsidies</h3>
            <p>Comprehensive information about various agricultural subsidy schemes</p>
          </div>
          <div className="feature-card">
            <h3>Financial Support</h3>
            <p>Guidance on financial assistance and funding opportunities</p>
          </div>
          <div className="feature-card">
            <h3>Expert Advice</h3>
            <p>Professional consultation on subsidy applications and eligibility</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;