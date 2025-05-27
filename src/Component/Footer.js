import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="/LittleLemon.png" alt="Little Lemon Logo" />
      </div>
      <div className="footer-links">
        <h4>Doormat Navigation</h4>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/book">Book a Table</a>
          </li>
        </ul>
      </div>
      <div className="contact-info">
        <h4>Contact</h4>
        <p>Email: info@littlelemon.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
      <div className="social-media">
        <h4>Follow Us</h4>
        <p>Instagram | Facebook | Twitter</p>
      </div>
    </footer>
  );
};

export default Footer;
