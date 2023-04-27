import React from "react";

import classes from "./CV.module.css";
import CVHeader from "./CVHeader";
// import ApplicantInfo from "./ApplicantInfo";
import TechnicalSkills from "./TechnicalSkills";

const CV = () => {
  return <div className={classes.CV}>
    <CVHeader />
    {/* <ApplicantInfo /> */}
    <TechnicalSkills />
  </div>;
};

export default CV;
