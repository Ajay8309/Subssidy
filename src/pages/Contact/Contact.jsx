import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

function Contact() {
  const form = useRef();
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const formData = new FormData(form.current);
    let newErrors = {};

    // Loop through all fields and check for empty values
    for (let [key, value] of formData.entries()) {
      if (!value.trim()) {
        newErrors[key] = "This field is required!";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("❌ Please fill in all required fields!", { position: "top-right" });
      return;
    }

    emailjs
      .sendForm(
        "service_nlncu8r",
        "template_rr1pafg",
        form.current,
        "G1lLBAGQHCAQ5E5EN"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("✅ Message sent successfully!", { position: "top-right" });
          form.current.reset();
          setErrors({});
        },
        (error) => {
          console.log("FAILED...", error);
          toast.error("❌ Failed to send message. Please try again.", { position: "top-right" });
        }
      );
  };

  return (
    <div className="contact">
      <ToastContainer />

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

        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className={errors.firstName ? "error" : ""}
            />
            {errors.firstName && <p className="error-text">{errors.firstName}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className={errors.lastName ? "error" : ""}
            />
            {errors.lastName && <p className="error-text">{errors.lastName}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className={errors.email ? "error" : ""}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone No.</label>
            <input
              type="text"
              id="phone"
              name="phone"
              className={errors.phone ? "error" : ""}
            />
            {errors.phone && <p className="error-text">{errors.phone}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="subject">Requirements</label>
            <textarea
              id="subject"
              name="subject"
              rows="4"
              className={errors.subject ? "error" : ""}
            ></textarea>
            {errors.subject && <p className="error-text">{errors.subject}</p>}
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
