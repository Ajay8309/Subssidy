import { Link } from "react-router-dom";

function NHM() {
  const path = "/Contact";
  return (
    <div className="subsidy-scheme">
      <h1 className="heroo">National Horticulture Mission (NHM)</h1>
      <div className="scheme-content">
        <section>
          <h2>About the Scheme</h2>
          <p>NHM is a centrally sponsored scheme aimed at promoting holistic growth of the horticulture sector. The mission focuses on enhancing horticulture production, improving nutritional security, and generating employment opportunities.</p>
        </section>

        <section>
          <h2>Benefits</h2>
          <ul>
            <li>Financial assistance for establishing new orchards and plantations</li>
            <li>Support for integrated pest and nutrient management</li>
            <li>Assistance for protected cultivation and organic farming</li>
            <li>Infrastructure development for post-harvest management and marketing</li>
          </ul>
        </section>

        <section>
          <h2>Eligibility</h2>
          <div className="eligibility-requirements">
            <ul>
              <li>Farmers, NGOs, SHGs, and cooperatives</li>
              <li>Public and private sector enterprises involved in horticulture</li>
              <li>Project proposals must align with NHM guidelines</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Documents Required</h2>
          <div className="documents-required">
            <ul>
              <li>Identity Proof (Aadhaar Card/Voter ID/PAN Card)</li>
              <li>Land Ownership Documents</li>
              <li>Project Proposal</li>
              <li>Bank Account Details</li>
              <li>Relevant Licenses and Registrations</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Application Process</h2>
          <div className="application-process">
            <ul>
              <li>Submit application to the State Horticulture Mission office</li>
              <li>Attach required documents and project proposal</li>
              <li>Application reviewed and approved by the mission authority</li>
              <li>Financial assistance released directly to the beneficiary account</li>
            </ul>
          </div>
        </section>

        <div className="contact-support">
          <h2>Need Help?</h2>
          <p>Contact our support team for assistance with your NHM application</p>
          <Link to={path}>
            <button>Contact Support</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function NHB() {
  const path = "/Contact";
  return (
    <div className="subsidy-scheme">
      <h1 className="heroo">National Housing Bank (NHB) Schemes</h1>
      <div className="scheme-content">
        <section>
          <h2>About the Scheme</h2>
          <p>NHB provides financial assistance to promote housing development across the country. The schemes aim to provide affordable housing solutions and support housing finance institutions.</p>
        </section>

        <section>
          <h2>Benefits</h2>
          <ul>
            <li>Subsidized loans for affordable housing projects</li>
            <li>Support for housing finance companies and microfinance institutions</li>
            <li>Financial inclusion initiatives targeting economically weaker sections</li>
            <li>Encourages sustainable and green housing solutions</li>
          </ul>
        </section>

        <section>
          <h2>Eligibility</h2>
          <div className="eligibility-requirements">
            <ul>
              <li>Individual home buyers from economically weaker sections</li>
              <li>Housing finance institutions and banks</li>
              <li>Developers of affordable housing projects</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Documents Required</h2>
          <div className="documents-required">
            <ul>
              <li>Identity Proof (Aadhaar Card/Voter ID/PAN Card)</li>
              <li>Income Proof</li>
              <li>Loan Application Form</li>
              <li>Bank Account Details</li>
              <li>Property Documents</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Application Process</h2>
          <div className="application-process">
            <ul>
              <li>Apply through registered housing finance institutions or banks</li>
              <li>Submit the necessary documents along with the application</li>
              <li>Loan is sanctioned after document verification</li>
              <li>Subsidy is credited to the loan account as per scheme guidelines</li>
            </ul>
          </div>
        </section>

        <div className="contact-support">
          <h2>Need Help?</h2>
          <p>Contact our support team for assistance with your NHB application</p>
          <Link to={path}>
            <button>Contact Support</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function NABARD() {
  const path = "/Contact";
  return (
    <div className="subsidy-scheme">
      <h1 className="heroo">National Bank for Agriculture and Rural Development (NABARD)</h1>
      <div className="scheme-content">
        <section>
          <h2>About the Scheme</h2>
          <p>NABARD focuses on promoting sustainable and equitable agriculture and rural development. The bank offers various schemes to support farmers, rural entrepreneurs, and cooperatives.</p>
        </section>

        <section>
          <h2>Benefits</h2>
          <ul>
            <li>Financial support for agricultural and rural development projects</li>
            <li>Subsidized loans for farmers and rural entrepreneurs</li>
            <li>Infrastructure development for rural areas</li>
            <li>Promotes self-employment and micro-enterprises in rural sectors</li>
          </ul>
        </section>

        <section>
          <h2>Eligibility</h2>
          <div className="eligibility-requirements">
            <ul>
              <li>Farmers, rural entrepreneurs, and cooperatives</li>
              <li>Self Help Groups and Joint Liability Groups</li>
              <li>Project proposals must align with NABARD guidelines</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Documents Required</h2>
          <div className="documents-required">
            <ul>
              <li>Identity Proof (Aadhaar Card/Voter ID/PAN Card)</li>
              <li>Land Ownership Documents (if applicable)</li>
              <li>Project Proposal</li>
              <li>Bank Account Details</li>
              <li>Relevant Licenses and Approvals</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Application Process</h2>
          <div className="application-process">
            <ul>
              <li>Submit application through NABARD-approved channels</li>
              <li>Attach required documents and project proposal</li>
              <li>Application reviewed and sanctioned by NABARD</li>
              <li>Financial assistance is disbursed as per project requirements</li>
            </ul>
          </div>
        </section>

        <div className="contact-support">
          <h2>Need Help?</h2>
          <p>Contact our support team for assistance with your NABARD application</p>
          <Link to={path}>
            <button>Contact Support</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export { NHM, NHB, NABARD };
