import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>For Business</h4>
          <ul>
            <li>Employer</li>
            <li>Health Plan</li>
            <li>Individual</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Partners</h4>
          <ul>
            <li>Swing Tech</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow us</h4>
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faTiktok} /></a>
            <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>©2025 TuEmpresa. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy</a>
          <a href="#">Security</a>
          <a href="#">Cookie Declaration</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
