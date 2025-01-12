import './Finance.css';

function Finance() {
  return (
    <div className="finance">
      <div className="finance-hero">
        <h1>Financial Services</h1>
        <p>
          We offer a range of financial services tailored to the needs of farmers and 
          agricultural entrepreneurs, ensuring access to credit, insurance, and expert advice.
        </p>
      </div>

      <div className="finance-content">
        <div className="finance-card">
          <h2>Loans</h2>
          <ul>
            <li>Agricultural Term Loans</li>
            <li>Crop Loans</li>
            <li>Equipment Financing</li>
            <li>Working Capital Loans</li>
          </ul>
        </div>

        <div className="finance-card">
          <h2>Insurance</h2>
          <ul>
            <li>Crop Insurance</li>
            <li>Equipment Insurance</li>
            <li>Livestock Insurance</li>
          </ul>
        </div>

        <div className="finance-card">
          <h2>Financial Advisory</h2>
          <ul>
            <li>Investment Planning</li>
            <li>Risk Management</li>
            <li>Subsidy Consultation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Finance;
