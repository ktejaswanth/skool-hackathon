import React from "react";
import { Link } from "react-router-dom";
import "../comp_css/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-grid">
        <div className="footer-section">
          <h4>POLICY INFO</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Sale</li>
            <li>Terms of Use</li>
            <li>Report Abuse & Takedown Policy</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>COMPANY</h4>
          <ul>
            <li>ktejaswanth@gmail.com</li>
            <li>Contact Us</li>
            <li>Mobile.no: 8688088449</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>E-Commerce</h4>
          <ul>
            <li>Product App</li>
            <li>Sell on our Website</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>POPULAR LINKS</h4>
          <ul>
            <li>Top Product</li>
            <li>Classic flavours</li>
            <li>Nutted Icecreams</li>
            <li>Fruit-based flavours</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>SUBSCRIBE</h4>
          <div className="subscribe-box">
            <input type="text" placeholder="Enter your email" />
            <button>SUBSCRIBE</button>
          </div>
          <p>
            Register now to get updates on promotions and coupons
          </p>
          <p className="admin-link" >
            <Link to="/admin-Login"  style={{color:"white"}}>Admin Access</Link>
          </p>
        </div>
      </div>
      <div className="footer-images">
      </div>
    </div>
  );
};

export default Footer;
