import React, { useState } from "react";
import "../style.css";

// Icons for social media
import { FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form after submission
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className="contact-container">
      {/* 🔹 Hero Section */}
      <section className="contact-hero">
        <h1>Get in Touch</h1>
        <p>Have any questions or want to collaborate? We'd love to hear from you!</p>
      </section>

      {/* 🔹 Contact Form */}
      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
        {submitted && <p className="success-message">✅ Your message has been sent!</p>}
      </section>

      {/* 🔹 Contact Info */}
      <section className="contact-info">
        <h2>Contact Details</h2>
        <div className="contact-details">
          <p><FaPhone /> +91 98765 43210</p>
          <p><FaEnvelope /> contact@bharatarchives.com</p>
          <p><FaMapMarkerAlt /> Mumbai, Maharashtra, India</p>
        </div>
      </section>

      {/* 🔹 Social Media Links */}
      <section className="contact-social">
        <h2>Connect With Us</h2>
        <div className="social-icons">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
