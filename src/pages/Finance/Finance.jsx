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
          <h2>Pradhan Mantri Mudra Yojana (PMMY)</h2>
          <p>
            MUDRA provides refinancing support to banks, MFIs, and NBFCs for lending loans up to ₹10 lakhs to micro-units. The loans are categorized into:
          </p>
          <ul>
            <li><strong>Shishu:</strong> Loans up to ₹50,000</li>
            <li><strong>Kishor:</strong> Loans from ₹50,000 to ₹5 lakhs</li>
            <li><strong>Tarun:</strong> Loans from ₹5 lakhs to ₹10 lakhs</li>
          </ul>
        </div>

        <div className="finance-card">
          <h2>Prime Minister’s Employment Generation Programme (PMEGP)</h2>
          <p>
            A scheme aimed at generating self-employment through micro-enterprises in the non-farm sector, implemented by KVIC. The subsidy rates are:
          </p>
          <ul>
            <li>15% in urban areas and 25% in rural areas for the general category</li>
            <li>25% in urban areas and 35% in rural areas for the special category</li>
          </ul>
        </div>

        <div className="finance-card">
          <h2>Chief Minister’s Employment Generation Programme (CMEGP)</h2>
          <p>
            Maharashtra’s credit-linked subsidy program for Micro & Small Enterprises, offering support for projects up to ₹50 lakhs. Financial institutions include:
          </p>
          <ul>
            <li>Public Sector Banks</li>
            <li>Regional Rural Banks</li>
            <li>Private Sector Scheduled Commercial Banks</li>
          </ul>
        </div>

        <div className="finance-card">
          <h2>Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)</h2>
          <p>
            A credit guarantee scheme for MSMEs by SIDBI and the Government of India, offering collateral-free loans:
          </p>
          <ul>
            <li>85% guarantee for micro-enterprises (up to ₹5 lakhs)</li>
            <li>75% guarantee for other enterprises</li>
            <li>50% for retail activities</li>
          </ul>
        </div>

        <div className="finance-card">
          <h2>SIDBI Loan</h2>
          <p>
            SIDBI provides direct and indirect loan schemes for MSMEs, with loan amounts ranging from ₹10 lakhs to ₹25 crores. Loans up to ₹1 crore can be obtained without collateral.
          </p>
          <p>
            It offers specialized schemes like the SIDBI Make in India Soft Loan Fund (SMILE), SIDBI Startup Mitra, and Growth Capital & Equity Assistance Scheme. The loans cater to working capital, machinery acquisition, and business expansion.
          </p>
        </div>

        <div className="finance-card">
          <h2>Stand Up India Scheme</h2>
          <p>
            Aimed at SC/ST and women entrepreneurs, offering loans from ₹10 lakhs to ₹1 crore for Greenfield enterprises in manufacturing, trading, and services sectors.
          </p>
          <p>
            The scheme provides up to 85% of project costs, with flexible repayment options of up to 7 years, including a moratorium period. The initiative promotes financial inclusion and entrepreneurship among marginalized groups.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Finance;
