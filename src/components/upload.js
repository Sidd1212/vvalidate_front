import React from "react";
import { MoleculesBullet } from "./MoleculesBullet";
import "./style.css";
import correct6 from "./images/correct-6.png";
import cloud from "./images/cloud-upload-fill0-wght200-grad0-opsz48-1.svg";
import rectangle from "./images/rectangle-619.svg";
import iconx from "./images/icon-x-letter.png";
export const FileUploadCopy = () => {
  return (
    <div className="file-upload-copy">
      <div className="group-wrapper">
        <div className="group">
          <div className="overlap">
            <h1 className="text-wrapper">Upload center</h1>
            <p className="p">Drag and drop your file here to start uploading</p>
            <div className="div">
              <div className="overlap-group">
                <img className="rectangle" alt="Rectangle" src={rectangle}/>
                <img className="cloud-upload" alt="Cloud upload" src={cloud} />
                <div className="text-wrapper-2">Upload your file</div>
                <div className="group-2">
                  <div className="bullets">
                    <div className="overlap-2">
                      <MoleculesBullet
                        className="element"
                        somethingGoesHereClassName="molecules-bullet-instance"
                        text="Design better"
                        visible={false}
                      />
                      <img className="correct" alt="Correct" src={correct6} />
                    </div>
                    <div className="overlap-3">
                      <MoleculesBullet
                        className="element"
                        somethingGoesHereClassName="molecules-bullet-instance"
                        text="Something goes here"
                        visible={false}
                      />
                      <img className="correct" alt="Correct" src={correct6} />
                    </div>
                    <div className="overlap-4">
                      <MoleculesBullet
                        className="element"
                        somethingGoesHereClassName="molecules-bullet-instance"
                        text="Something goes here"
                        visible={false}
                      />
                      <img className="img" alt="Correct" src={correct6} />
                    </div>
                    <div className="overlap-group-2">
                      <MoleculesBullet
                        className="element"
                        somethingGoesHereClassName="molecules-bullet-instance"
                        text="Something goes here"
                        visible={false}
                      />
                      <img className="img" alt="Correct" src={correct6} />
                    </div>
                    <div className="element">
                      <MoleculesBullet
                        className="element"
                        somethingGoesHereClassName="molecules-bullet-instance"
                        text="Design faster"
                        visible={false}
                      />
                      <img className="img" alt="Correct" src={correct6} />
                    </div>
                  </div>
                  <div className="text-wrapper-3">Uploading instructions</div>
                  <div className="overlap-wrapper">
                    <div className="div-wrapper">
                      <div className="text-wrapper-4">Preview</div>
                    </div>
                  </div>
                </div>
              </div>
              <img className="icon-x-letter" alt="Icon x letter" src={iconx} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FileUploadCopy;