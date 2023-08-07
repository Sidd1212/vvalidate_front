import React from "react";
import "./style.css";
import tick from './images/tick.png';
import logo from './images/logo.png';
import tune from './images/tune.png';
import search from './images/search.png';
import dash from './images/dash.png';

export const Homepage = () => {
  return (
    <div className="homepage" id="homepage">
      <div className="mask-group-wrapper">
        <div className="mask-group">
          <div className="landing-home">
            <div className="text-wrapper"><a href="#examples">Examples</a></div>
            <div className="div"><a href="#customerreview">Case Studies</a></div>
            <div className="overlap">
              <div className="rectangle" />
              <div className="text-wrapper-2"><a href="#signin">Login</a></div>
            </div>
            <div className="overlap-group">
              <div className="rectangle-2" />
              <div className="text-wrapper-3"><a href="#signup">Register</a></div>
            </div>
            <div className="overlap-group-2">
              <div className="rectangle-3" />
              <div className="text-wrapper-4"><a href="#signup">Register now</a></div>
              <div className="rectangle-4" />
              <div className="content">
              <h1 className="h-1">Stay compliant and confident in your hiring decisions</h1>
              <p className="paragraph">
                At Vvalidate, we value the impact of international talent on innovation and growth. Our comprehensive
                suite of tools and services simplifies the H1-B visa verification process, allowing you to prioritize
                building diverse and dynamic teams.
              </p>
              </div>
              <div className="text-wrapper-5">Home</div>
              <div className="text-wrapper-6"><a href="#howitworks">How it works</a></div>
              <img className="logo" alt="Logo" src={logo} />
            </div>
            <div className="overlap-2">
              <div className="rectangle-5" />
              <img className="dash" alt="Whatsapp" src={dash} />
              <div className="rectangle-6" />
              <img className="verified" alt="Verified" src={tick} />
              <div className="rectangle-7" />
              <img className="tune" alt="Tune" src={tune} />
              <div className="rectangle-8" />
              <img className="ic-baseline-search" alt="Ic baseline search" src={search} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage