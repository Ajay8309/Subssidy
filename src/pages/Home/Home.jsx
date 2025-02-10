import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to Mahabizguru</h1>
        <p>Empowering Businesses with Government Grants, Financial Solutions, and Expert Consultancy</p>
      </div>
      
      <section className="features">
        <h2>Our Services</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Government Subsidies</h3>
            <p>Comprehensive guidance on over 40 government grant and subsidy schemes across agriculture, manufacturing, and service sectors.</p>
          </div>
          <div className="feature-card">
            <h3>Financial Assistance</h3>
            <p>Expert advice on securing term loans, working capital, and credit guarantee schemes like CGTMSE for MSMEs.</p>
          </div>
          <div className="feature-card">
            <h3>Business Consultancy</h3>
            <p>Specialized consultancy in tax compliance, auditing, company registration, and strategic business expansion.</p>
          </div>
          <div className="feature-card">
            <h3>Startup & SME Support</h3>
            <p>End-to-end support in setting up businesses, obtaining Udyog Aadhaar registration, and leveraging startup incentives.</p>
          </div>
          <div className="feature-card">
            <h3>Taxation & Compliance</h3>
            <p>Ensuring seamless tax filings, GST registration, company law compliance, and regulatory adherence for businesses.</p>
          </div>
          <div className="feature-card">
            <h3>Project Financing</h3>
            <p>Customized funding solutions for large-scale agricultural, storage, and food processing projects, including NABARD & NHB subsidies.</p>
          </div>
          <div className="feature-card">
            <h3>Web Designing & Online Marketing</h3>
            <p>Helping businesses establish their online presence with professional web design and digital marketing strategies.</p>
          </div>
          <div className="feature-card">
            <h3>Auditing & Compliance</h3>
            <p>Providing thorough auditing services to ensure compliance with financial regulations and industry standards.</p>
          </div>
        </div>
      </section>

      <section className="case-studies">
        <h2>Success Stories</h2>
        <div className="case-grid">
          <div className="case-card">
            <p>"With Mahabizguru’s guidance, we secured a 40% subsidy under the NHB scheme for our polyhouse project."</p>
            <h4>- Vikram Jadhav, AgriGreen Pvt. Ltd.</h4>
          </div>
          <div className="case-card">
            <p>"Their expert financial assistance helped us get a term loan and SGST incentives for our food processing plant."</p>
            <h4>- Neha Deshmukh, FreshHarvest Foods</h4>
          </div>
          <div className="case-card">
            <p>"Mahabizguru’s end-to-end compliance service made it easy for us to obtain a dairy farming subsidy."</p>
            <h4>- Rajesh Kulkarni, Kulkarni Dairy Farms</h4>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;