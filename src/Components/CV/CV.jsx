import React from "react";

import classes from "./CV.module.css";
import CVHeader from "./CVHeader";
// import ApplicantInfo from "./ApplicantInfo";
import TechnicalSkills from "./TechnicalSkills";
import SoftSkills from "./SoftSkills";

const CV = () => {
  return <div className={classes.CV}>
    <CVHeader />
    {/* <ApplicantInfo /> */}
    <TechnicalSkills />
    <SoftSkills/>
  </div>;
};

export default CV;
