import React from "react";
import { AtomsElements } from "./AtomsElements";
import "./style.css";
import ornament from './images/ornament-71.svg';
import ornament1 from './images/ornament-72.svg';
import ornament2 from './images/ornament-69.svg';
import ornament3 from './images/ornament-70.svg';
import logo from './images/logo-8.png';
import iteration from './images/iteration-1.png';
import contract1 from './images/contract-1.png';
import file31 from './images/file-3-1.png';
import rectangle2 from './images/rectangle-658.png';


export const HowItWorksCopy = () => {
  return (
    <div className="how-it-works-copy" id="howitworks">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="rectangle" />
          <div className="frame">
            <div className="background">
              <div className="overlap-group">
                <div className="div" />
                <h1 className="header">How it works?</h1>                
                <img className="ornament" alt="Ornament" src={ornament} />
                <img className="ornament-1" alt="Ornament" src={ornament1} />
                <img className="ornament-2" alt="Ornament" src={ornament2}/>
                <img className="ornament-3" alt="Ornament" src={ornament3} />
                <img className="logo" alt="Logo" src={logo} />
                <div className="middle-group">
                <div className="frame-2">
                  <img className="img-2" alt="Contract" src={contract1} />
                  <img className="img-2" alt="File" src={file31} />
                  <img className="iteration" alt="Iteration" src={iteration} />
                  <img className="rectangle-2" alt="Rectangle" src={rectangle2} />
                </div>
                <div className="group">
                  <div className="overlap-group-2">
                    <AtomsElements className="number" />
                    <AtomsElements className="atoms-elements-numbers-v2" />
                    <AtomsElements className="atoms-elements-instance" />
                    <AtomsElements className="atoms-elements-numbers-v2-instance" />
                  </div>
                  <div className="text-group">
                  <p className="paragraph">
                    Result can be of 3 types-
                    <br />
                    accepted, questionable and the system couldn’t scan the copy.
                  </p>
                  <p className="text-wrapper">
                    Documents will be tested by our algorithm build by using a blend of various digital technologies.
                  </p>
                  <p className="p">
                    <span className="span">Upload candiadates H-1B documents on our portal. (Minimum resolution= </span>
                    <span className="text-wrapper-2">2MB</span>
                    <span className="span"> and Maximum resolution= </span>
                    <span className="text-wrapper-2">5MB</span>
                    <span className="span">)</span>
                  </p>
                  <p className="paragraph-2">
                    Register to our website using our business email by after carefully reading the terms and
                    conditions.
                  </p>
                  </div>
                  <div className="frame-3">
                    <div className="title">Sign up</div>
                    <div className="title-2">Upload</div>
                    <div className="title-3">Process</div>
                    <div className="title-4">VValidate</div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HowItWorksCopy;