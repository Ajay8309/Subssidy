import { Link } from "react-router-dom";


function PMEGP() {
  const path = "/Contact";
  return (
    <div className="subsidy-scheme">
      <h1 className="heroo">Prime Minister's Employment Generation Programme (PMEGP)</h1>
      <div className="scheme-content">
        <section>
          <h2>About the Scheme</h2>
          <p>PMEGP is a central sector scheme administered by the Ministry of Micro, Small and Medium Enterprises. The scheme is aimed at generating self-employment opportunities through establishment of micro-enterprises in the non-farm sector.</p>
        </section>
        
        <section>
          <h2>Benefits</h2>
          <ul>
            <li>Maximum subsidy of 35% for general category in urban areas</li>
            <li>Maximum subsidy of 25% for general category in rural areas</li>
            <li>For special categories (SC/ST/OBC/Women/Minorities/Ex-servicemen/PHC), subsidy is 45% in rural areas</li>
            <li>Project cost up to ₹25 lakhs for manufacturing sector</li>
            <li>Project cost up to ₹10 lakhs for service sector</li>
            <li>No income ceiling for assistance</li>
          </ul>
        </section>

        <section>
          <h2>Eligibility</h2>
          <div className="eligibility-requirements">
            <ul>
              <li>Age: 18 years and above</li>
              <li>Educational Qualification: VIII pass for projects above ₹10 lakhs</li>
              <li>Only new projects are considered</li>
              <li>Self Help Groups (including those belonging to BPL provided that they have not availed benefits under any other scheme)</li>
              <li>Institutions registered under Societies Registration Act 1860</li>
              <li>Production based Co-operative Societies</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Documents Required</h2>
          <div className="documents-required">
            <ul>
              <li>Identity Proof (Aadhaar Card/Voter ID/PAN Card)</li>
              <li>Address Proof</li>
              <li>Educational Qualification Certificates</li>
              <li>Caste Certificate (if applicable)</li>
              <li>Project Report</li>
              <li>Quotation for Machinery</li>
              <li>Bank Account Details</li>
              <li>Passport Size Photographs</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Application Process</h2>
          <div className="application-process">
            <ul>
              <li>Register on the PMEGP e-portal</li>
              <li>Fill in the online application form</li>
              <li>Upload required documents</li>
              <li>Application processed by KVIC/KVIB/DIC</li>
              <li>Bank sanctions and releases the loan</li>
              <li>Subsidy is released by KVIC directly to the loan account</li>
            </ul>
          </div>
        </section>

        <div className="contact-support">
          <h2>Need Help?</h2>
          <p>Contact our support team for assistance with your PMEGP application</p>
          <Link to={path}>
          <button>Contact Support</button>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default PMEGP;