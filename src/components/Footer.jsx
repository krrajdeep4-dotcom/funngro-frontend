import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Brand Section */}
        <div className="footer-section brand">
          <h2>Funngro</h2>
          <p>Empowering teens to learn, earn, and grow by working with top companies.</p>
        </div>
        
      
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">For Teens</a></li>
            <li><a href="/company">For Company</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        
        <div className="footer-section social">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <span>📘</span> 
            <span>📸</span> 
            <span>💼</span> 
            <span>🐦</span> 
          </div>
        </div>
      </div>
      
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Funngro Assignment. All rights reserved.</p>
        <p className="developer-tag">Designed & Built by Rajdeep Kumar Ram</p>
      </div>
    </footer>
  );
}

export default Footer;