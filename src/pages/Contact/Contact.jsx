// Contact.js
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <div className="contact-hero">
        <h1>Contact Mahabizguru</h1>
        <p>Have questions about business subsidies, finance, or registration? We are here to assist you.</p>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          
          <div className="info-item">
            <h3>Address</h3>
            <p>Office No. 304, “Status Point”, Near S P College, Sadashiv Peth, Pune 411030, MH, India</p>
          </div>
          
          <div className="info-item">
            <h3>Email</h3>
            <p>mahabizguru@gmail.com</p>
          </div>
          
          <div className="info-item">
            <h3>Phone</h3>
            <p>+91 7030140224</p>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="first-name" required />
          </div>

          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone No.</label>
            <input type="text" id="phone" name="phone" required />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Requirements</label>
            <input type="text" id="subject" name="subject" required />
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
