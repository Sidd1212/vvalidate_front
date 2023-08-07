import PropTypes from "prop-types";
import React from "react";
import { AtomsIconsSystem } from "../AtomsIconsSystem";
import "./style.css";

export const MoleculesBullet = ({
  className,
  somethingGoesHereClassName,
  text = "Something goes here",
  visible = true,
}) => {
  return (
    <div className={`molecules-bullet ${className}`}>
      <div className={`something-goes-here ${somethingGoesHereClassName}`}>{text}</div>
      {visible && <AtomsIconsSystem atomsIconsSystem="./images/icon.svg" className="icon" />}
    </div>
  );
};

MoleculesBullet.propTypes = {
  text: PropTypes.string,
  visible: PropTypes.bool,
};
