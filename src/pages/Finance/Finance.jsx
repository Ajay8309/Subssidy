// Finance.js
import './Finance.css';

function Finance() {
  return (
    <div className="finance">
      <div className="finance-hero">
        <h1>Financial Services</h1>
        <p>
          We provide a range of financial services tailored to the needs of businesses, startups, and entrepreneurs, ensuring access to credit, insurance, and expert financial advisory.
        </p>
      </div>

      <div className="finance-content">
        <div className="finance-card">
          <h2>Government Loan Schemes</h2>
          <ul>
            <li>Prime Minister’s Employment Generation Programme (PMEGP)</li>
            <li>Chief Minister’s Employment Generation Programme (CMEGP)</li>
            <li>Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)</li>
            <li>Stand Up India Scheme</li>
            <li>SIDBI Loan for MSMEs</li>
          </ul>
        </div>

        <div className="finance-card">
          <h2>Subsidized Loan Categories</h2>
          <ul>
            <li>Agricultural Term Loans</li>
            <li>Equipment Financing</li>
            <li>Working Capital Loans</li>
            <li>Cold Storage and Warehouse Financing</li>
          </ul>
        </div>

        <div className="finance-card">
          <h2>Insurance & Risk Management</h2>
          <ul>
            <li>Crop Insurance</li>
            <li>Equipment Insurance</li>
            <li>Business Risk Management</li>
            <li>Financial Advisory for Loan and Grant Applications</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Finance;
