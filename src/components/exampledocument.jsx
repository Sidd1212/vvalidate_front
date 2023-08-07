import React from "react";
import { MoleculesBullet } from "./MoleculesBullet";
import "./style.css";
import img from "./images/arrow-right-alt-3.svg";
import arrow from "./images/arrow-right-alt-2.svg";
import arrow1 from "./images/arrow-right-alt-1.svg";
import arrow2 from "./images/arrow-right-alt-4.svg";
import arrow3 from "./images/arrow-right-alt-5.svg";
import visa from "./images/visa-1.png";
import polygon2 from "./images/polygon-2.svg";
import arrow4 from "./images/arrow-right-alt-6.svg";
import polygon from "./images/polygon-4.svg";
import vector from "./images/vector.svg";
import crop from "./images/vector2.svg";
import tune from "./images/tune-fill0-wght400-grad0-opsz48-1.svg";
import whatsapp from "./images/whatsapp-image-2023-06-29-at-4-34-2.png";
import baseline from "./images/ic-baseline-search.svg";
import search from "./images/verified-fill0-wght400-grad0-opsz48-1.svg";
export const ExamplesDocument = () => {
  return (
    <div className="examples-document" id="examples">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="mask-group">
            <div className="landing-home">                    
              <div className="overlap-3">
                <div className="rectangle-5" />
                <img className="whatsapp-image" alt="Whatsapp " src={whatsapp} />
                <div className="rectangle-6" />
                <div className="rectangle-7" />
                <div className="rectangle-8" />
                <img className="tune" alt="Tune" src={tune} />
                <img className="ic-baseline-search" alt="Ic baseline search" src={baseline} />
                <img className="verified" alt="Verified" src={search} />
              </div>
            </div>
          </div>
          <div className="landing-home-wrapper">
            <div className="overlap-group-wrapper">
              <div className="overlap-4">
                <div className="rectangle-9" />
                <h1 className="header"> Examples &amp; Instructions</h1>
                <div className="flexcontainer">
                  <div className="text">
                    <span className="span">
                      Effortless Document Uploads Made Easy: <br />
                    </span>
                  </div>
                  <div className="text">
                    <span className="text-wrapper-7">Explore Examples and Step-by-Step Instructions</span>
                  </div>
                </div>
                <div className="group">
                  <div className="overlap-group-3">
                    <div className="overlap-5">
                        <div className="rectangle-12">
                      <img className="crop-original" alt="Crop original" src={crop}/>
                      <div className="paragraph-2">Image</div>
                      </div>
                    </div>
                    <img className="vector" alt="Vector" src={vector} />
                    <div className="paragraph-3">Document</div>
                  </div>
                </div>
                <div className="group-2">
                  <div className="title">File requirement checklist</div>
                  <div className="overlap-6">
                    <div className="bullets">
                      <MoleculesBullet
                        className="element"
                        somethingGoesHereClassName="molecules-bullet-instance"
                        text="Design better"
                        visible={false}
                      />
                      <MoleculesBullet
                        className="design-component-instance-node"
                        somethingGoesHereClassName="molecules-bullet-instance"
                        text="Something goes here"
                        visible={false}
                      />
                      <MoleculesBullet
                        className="element-2"
                        somethingGoesHereClassName="molecules-bullet-instance"
                        text="Something goes here"
                        visible={false}
                      />
                      <MoleculesBullet
                        className="element-3"
                        somethingGoesHereClassName="molecules-bullet-instance"
                        text="Maximum resolution of 5mb - 2478x3231"
                        visible={false}
                      />
                      <MoleculesBullet
                        className="element-4"
                        somethingGoesHereClassName="molecules-bullet-instance"
                        text="Minimum resolution of 2mb - 1583x2048"
                        visible={false}
                      />
                    </div>
                    <img className="arrow-right-alt" alt="Arrow right alt" src={arrow1} />
                    <img className="arrow-right-alt" alt="Arrow right alt" src={arrow} />
                    <img className="img" alt="Arrow right alt" src={img} />
                    <img className="arrow-right-alt-2" alt="Arrow right alt" src={arrow2} />
                    <img className="arrow-right-alt-3" alt="Arrow right alt" src={arrow3} />
                    <img className="arrow-right-alt-4" alt="Arrow right alt" src={arrow4} />
                  </div>
                </div>
                <div className="div-wrapper">
                  <div className="overlap-7">
                    <img className="visa" alt="Visa" src={visa} />
                    <img className="polygon" alt="Polygon" src={polygon2} />
                    <div className="rectangle-10" />
                    <div className="frame">
                      <p className="text-wrapper-8">Make sure the picture satisfies the <br/> minimum resolution requirement!!</p>
                      
                    </div>
                    <img className="polygon-2" alt="Polygon" src={polygon} />
                    <div className="rectangle-11" />
                    <div className="if-the-file-couldn-t-wrapper">
                      <p className="if-the-file-couldn-t">
                        If the file couldn’t satisfy all the <br />
                        instructions it may not be detected.
                      </p>
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
export default ExamplesDocument;