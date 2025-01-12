import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>Have questions about agricultural subsidies? We're here to help!</p>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          
          <div className="info-item">
            <h3>Address</h3>
            <p>123 Agriculture Road, New Delhi, India</p>
          </div>
          
          <div className="info-item">
            <h3>Email</h3>
            <p>info@bharatsubsidy.com</p>
          </div>
          
          <div className="info-item">
            <h3>Phone</h3>
            <p>+91 1234567890</p>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">First Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="name">Last Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="text">Phone no.</label>
            <input type="text" id="email" name="email" required />
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
