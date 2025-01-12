import { Link } from "react-router-dom";

function CMEGP() {
  const path = "/Contact";
  return (
    <div className="subsidy-scheme">
      <h1 className="heroo">Chief Minister's Employment Generation Programme (CMEGP)</h1>
      <div className="scheme-content">
        <section>
          <h2>About the Scheme</h2>
          <p>CMEGP is a state sector scheme aimed at creating self-employment opportunities by promoting micro-enterprises in various sectors. This initiative is designed to empower youth and underprivileged communities, fostering economic growth and reducing unemployment.</p>
        </section>

        <section>
          <h2>Benefits</h2>
          <ul>
            <li>Subsidy of up to 35% in urban areas for general category beneficiaries</li>
            <li>Subsidy of up to 25% in rural areas for general category beneficiaries</li>
            <li>For special categories (SC/ST/OBC/Women/Minorities/Ex-servicemen/PHC), subsidy is up to 45% in rural areas</li>
            <li>Maximum project cost of ₹25 lakhs for the manufacturing sector</li>
            <li>Maximum project cost of ₹10 lakhs for the service sector</li>
            <li>No income ceiling for eligibility</li>
          </ul>
        </section>

        <section>
          <h2>Eligibility</h2>
          <div className="eligibility-requirements">
            <ul>
              <li>Age: 18 years and above</li>
              <li>Educational Qualification: Minimum VIII pass for projects above ₹10 lakhs</li>
              <li>Only new projects are eligible</li>
              <li>Self Help Groups, including those from BPL families, are eligible if they have not availed benefits under other schemes</li>
              <li>Registered institutions under the Societies Registration Act 1860</li>
              <li>Production-based Co-operative Societies</li>
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
              <li>Register on the CMEGP official portal</li>
              <li>Fill in the online application form</li>
              <li>Upload the required documents</li>
              <li>Application reviewed by the respective department</li>
              <li>Bank sanctions and disburses the loan</li>
              <li>Subsidy is credited directly to the loan account by the concerned authority</li>
            </ul>
          </div>
        </section>

        <div className="contact-support">
          <h2>Need Help?</h2>
          <p>Contact our support team for assistance with your CMEGP application</p>
          <Link to={path}>
            <button>Contact Support</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CMEGP;
