import React from "react";

import classes from "./CV.module.css";
import CVHeader from "./CVHeader";
import Experience from "./Experience";
import Education from "./Education";
import ApplicantInfo from "./ApplicantInfo";
import TechnicalSkills from "./TechnicalSkills";
import SoftSkills from "./SoftSkills";

const CV = () => {
  return (
    <div className={classes.CV}>
      <CVHeader />
      <div className={classes["cv-body"]}>
        <div className={classes.sidebar}>
          <TechnicalSkills />
          <SoftSkills />
        </div>
        <div className={classes.main}>
          <ApplicantInfo />
          <Experience />
          <Experience />
          <Experience />
          <Education />
        </div>
      </div>
    </div>
  );
};

export default CV;
