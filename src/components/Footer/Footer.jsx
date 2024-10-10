import React from "react";
import "./Footer.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import user_icon from "../../assets/user_icon.svg";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="logo">
            <h3>Kartik</h3>
            <img src={theme_pattern} alt="" />
          </div>
          <p>
            I am a professional frontend developer, With 5 years of experience.I
            can provide clean code and perfect pixel design.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" name="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          Copyright © 2024 | Mr Kartik Barman. | All right Reversed
        </p>
        <div className="footer-bottom-right">
          <p>Term of services</p>
          <p>Privacy policy</p>
          <p>Contact Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
