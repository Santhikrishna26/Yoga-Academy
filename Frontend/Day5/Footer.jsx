// Footer.js

import React from 'react';
import '../assets/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="https://static.vecteezy.com/system/resources/previews/004/820/288/non_2x/circular-swoosh-with-nature-leaf-and-women-yoga-free-vector.jpg" alt="Yoga Academy" />
          <h3>YogaLife</h3>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/classes">Classes</a></li>
            <li><a href="/schedule">Schedule</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: info@yogaacademy.com</p>
          <p>Phone: +1234567890</p>
          <p>Address: 123 Yoga Street, City, Country</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Yoga Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
