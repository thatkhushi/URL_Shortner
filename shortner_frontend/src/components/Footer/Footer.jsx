import React from "react";
// import urlLogo from '../../assets/logo.svg';
import "./Footer.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = () => {
  var User = useSelector((state) => state.currentUserReducer);
  return (
    <div className="url__footer section__padding">
      <div className="url__footer-heading">
        <h1 className="gradient__text">Boost your links today</h1>
      </div>

      {User == null ? (
        <Link to="/auth" className="button_getStarted">
          Get Started
        </Link>
      ) : (
        <Link to="/feature" className="button_getStarted">
          Get Started
        </Link>
      )}

      <div className="url__footer-links">
        <div className="url__footer-links_logo">
          {/* <img src={urlLogo} alt="url_logo" /> */}
          <p>
            Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
          </p>
        </div>
        <div className="url__footer-links_div">
          <h4>Features</h4>
          <p>Link Shortening</p>
          <p>Branded Links</p>
          <p>Analytics</p>
          
        </div>
        <div className="url__footer-links_div">
          <h4>Resources</h4>
          <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
        </div>
        <div className="url__footer-links_div">
          <h4>Company</h4>
          <p>About</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
      </div>

      <div className="url__footer-copyright">
        <p>@2023 URL SHORTNER. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
