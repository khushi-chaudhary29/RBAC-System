import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <p>RBAC System - Your trusted Role-Based Access Control solution.</p>

      {/* Quick Links Section */}
      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#documentation">Documentation</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>

      {/* Subscription Form */}
      <div className="subscription">
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} RBAC System. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
