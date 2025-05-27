// src/pages/Contact.js

import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    // Here you'd normally send the data to your backend or API
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>

      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject (optional)"
            value={form.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-information">
          <h3>Get in Touch</h3>
          <p>
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p>
            <strong>Email:</strong> info@littlelemon.com
          </p>
          <p>
            <strong>Address:</strong> 123 Lemon Street, Citrus City, FL
          </p>

          <h3>Business Hours</h3>
          <ul>
            <li>Mon – Fri: 10 AM – 9 PM</li>
            <li>Sat – Sun: 11 AM – 10 PM</li>
          </ul>

          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
