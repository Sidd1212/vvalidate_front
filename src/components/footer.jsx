import React from "react";
import "./style.css";
import twitter from "./images/twitter.svg";
import group from "./images/group-3595.svg";
import facebook from "./images/facebook.svg";
import linkedin from "./images/linkedin.svg";
import logo from "./images/logo 3.svg";

export const Footer = () => {
  return (
    <div className="footer-white">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="footer-UI">
            <div className="product">
              <div className="text-wrapper">V-Validate</div>
              <div className="div">Pricing</div>
              <div className="text-wrapper-2">Updates</div>
              <div className="text-wrapper-3">Beta</div>
              <div className="time-tracking">Newsletter</div>
              <div className="shift-planner">Collaborations</div>
            </div>
            <div className="information">
              <div className="text-wrapper">Information</div>
              <div className="div">FAQ</div>
              <div className="text-wrapper-2">Blog</div>
              <div className="text-wrapper-3">Support</div>
            </div>
            <div className="company">
              <div className="text-wrapper-4">Company</div>
              <div className="text-wrapper-5">About us</div>
              <div className="text-wrapper-6">Careers</div>
              <div className="text-wrapper-7">Contact us</div>
            </div>
            <div className="quicklinks">
              <div className="text-wrapper-8">Quick Links</div>
              <div className="text-wrapper-9">Link1</div>
              <div className="text-wrapper-10">Link2</div>
              <div className="text-wrapper-11">Link3</div>
            </div>
            
            <div className="subscribe">
              <div className="overlap-group">
                <div className="group">
                  <div className="learn-more">Subscribe</div>
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-2">
                      <img className="img" alt="Group" src={group} />
                      <div className="label">Email address</div>
                    </div>
                  </div>
                  <p className="hello-we-are-flair">
                    Hello, we are V-Validate. Our goal is to assist our clients in verifying data and making validation
                    simple and fast.
                  </p>
                </div>
              </div>
            </div>
            <div className="divider" />
            <div className="terms-privacy">
              <div className="pricing">Terms</div>
              <div className="pricing-2">Privacy</div>
              <div className="pricing-3">Cookies</div>
            </div>
            <div className="social">
            <img className="twitter" alt="Twitter" src={twitter} />
            <img className="facebook" alt="Facebook" src={facebook} />
            <img className="linkedin" alt="Linkedin" src={linkedin} />
            </div>
          </div>
          <img className="logo" alt="Logo" src={logo} />
        </div>
      </div>
    </div>
  );
};
export default Footer;