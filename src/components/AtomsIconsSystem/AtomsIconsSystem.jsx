
import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const AtomsIconsSystem = ({ className, atomsIconsSystem = "/img/atoms-icons-system-check.svg" }) => {
  return <img className={`atoms-icons-system ${className}`} alt="Atoms icons system" src={atomsIconsSystem} />;
};

AtomsIconsSystem.propTypes = {
  atomsIconsSystem: PropTypes.string,
};
